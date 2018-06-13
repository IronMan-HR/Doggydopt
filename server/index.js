var express = require('express');
var bodyParser = require('body-parser');
var url = require('url');
var axios = require('axios');
var history = require('connect-history-api-fallback');

var models = require('../server/db/models/models.js');

var port = process.env.PORT || 9000;
var app = express(); 

app.use(history());
app.use(express.static(__dirname + '/../client-react/dist'));
app.use(bodyParser.json());

//Provides the characteristics for all breeds.
app.get('/breeds/all', (req, res)=>{
	models.breeds.all((data)=>{
		res.status(201).send(data);
	});
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

//Will get the pictures for all the dog breeds.
app.get('/breeds/all/pictures', (req, res)=>{
	models.pictures.get((data)=>{
		res.status(201).send(data);
	});
});

app.post('/login', (req, res) => {
	console.log('login request is', req.body);
	// if (userExists(req.body.username) && passwordIsCorrect(req.body.password)) {
	// 	res.status(201).send();
	// } else if (userExists(req.body.username) && !passwordIsCorrect(req.body.password)) {
	// 	res.status(202).send('incorrect password');
	// } else {
	// 	res.status(202).send('user not found');
	// }
	res.status(201).send();
});

app.post('/signup', (req, res) => {
	console.log('signup request is', req.body);
	// if (userExists(req.body.username)) {
	// 	res.status(202).send('user already exists');
	// } else {
	// 	createUser(req.body, () => {
	// 		res.status(201).send();
	// 	})
	// }
	res.status(201).send();
});

app.listen(port, ()=>{
	console.log(`listening to ${port}`);
})