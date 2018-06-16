var express = require('express');
var bodyParser = require('body-parser');
var url = require('url');
var axios = require('axios');
var history = require('connect-history-api-fallback');
var session = require('express-session');
var models = require('../server/db/models/models.js');

var port = process.env.PORT || 9000;
var googleMapsAPI_key = process.env.googleMapsAPI_key || require('../config.js').googleMapsAPI_key;
var app = express(); 

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 1000,
		name: '',
	}
}));

app.use(history());
app.use(express.static(__dirname + '/../client-react/dist'));
app.use(bodyParser.json());

//Provides the characteristics for all breeds.
app.get('/breeds/all', (req, res) =>{
	models.breeds.all((data)=>{
		res.status(201).send(data);
	});
});



// app.get('/isUserAuth', (req, res) => {
// 	if (req.session.cookie.name = 'super secret cookie') {
// 		res.status(200).send('yes');
// 	} else {
// 		res.status(200).send('no');
// 	}
// })

app.get('/getAPIKey', (req, res) => {
	res.status(200).send(googleMapsAPI_key);
});

//Provides characteristics for a particular breed when the name is sent as post parameters.
app.post('/breeds', (req, res)=>{
	models.breeds.post(req.body, (data)=>{
		res.status(201).send(data);
	});
});


//Retrieves the adoptable dogs based on breed name and zip code.
app.post('/adopt', (req, res)=>{
	models.adopt.post(req.body, (results)=>{
		res.status(201).send(results);
	});
});

//Retrieves all nearby shelters based on zip code.
app.post('/shelters', (req, res) => {
	models.shelters.post(req.body, (err, results) => {
		res.send(results);
	});
});

//Will get the pictures for all the dog breeds.
app.get('/breeds/all/pictures', (req, res)=>{
	models.pictures.get((data)=>{
		res.status(201).send(data);
	});
});

app.post('/login', (req, res) => {
	models.users.checkUser(req.body, req, (status, message) => {
		res.status(status).send(message);
	});
});

app.post('/signup', (req, res) => {
	models.users.createUser(req.body, (status, message) => {
		res.status(status).send(message);
	});
});

/* ROUTES FOR FAVES */

app.get('/faves', (req, res) => {
	let {username} = req.query;
	models.faves.getUserDogs(username, (err, data) => {
		if (err) res.status(400).json(err);
		else res.status(200).send(data);
	});
});

app.get('/faveStatus', (req, res) => {
	//console.log('req.session is', req.session);
	let {dog_id, username} = req.query;
	models.faves.checkFave(dog_id, username, (err, data) => {
		if (err) res.status(400).json(err);
		else res.status(200).send(data);
	});
});

app.post('/faves', (req, res) => {
  models.faves.saveDogToPool(req.body.dog, (err, data) => {
    if (err) {console.log(err); res.status(400).send(err)}
    else models.faves.saveFave(req.body.dog.id.$t, req.body.username, (err2, data2) => {
      if (err2) res.status(401).send(err2);
      else res.send(data2);
    });
  });
});

app.delete('/faves', (req, res) => {
	models.faves.deleteFave(req.query.dog_id, req.query.username, (err, data) => {
    if (err) res.status(400).send(err);
	  else res.send(data);
	});
});

app.listen(port, () => console.log(`listening to ${port}`));