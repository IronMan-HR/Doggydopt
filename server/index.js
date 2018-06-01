var express = require('express');
var bodyParser = require('body-parser');
var url = require('url');

var models = require('../server/db/models/models.js');

var axios = require('axios');
var port = process.env.PORT || 9000;
var app = express();

app.use(express.static(__dirname + '/../client-react/dist'));
app.use(bodyParser.json());

app.get('/breeds/all/pictures', (req, res)=>{
	models.pictures.get((data)=>{
		res.status(201).send(data);
	});
});

app.get('/breeds/all', (req, res)=>{
	models.breeds.all((data)=>{
		res.status(201).send(data);
	});
});

app.post('/breeds', (req, res)=>{
	console.log('body', req.body);
	models.breeds.post(req.body, (data)=>{
		res.status(201).send(data);
	});
});

app.post('/adopt', (req, res)=>{
	console.log('data', req.body);
	models.adopt.post(req.body, (data)=>{
		res.status(201).send(data);
	});
});


app.listen(port, ()=>{
	console.log(`listening to ${port}`);
})