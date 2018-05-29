var express = require('express');
var bodyParser = require('body-parser');

var axios = requier('axios');
var port = process.env.PORT || 9000;
var app = express();

app.use(express.static(__dirname, '/../client-react/'));
app.use(bodyParser.json());

app.get('/action', (req, res)=>{
	res.status(201).send(data);
});

app.post('/action', (req, res)=>{
	res.status(201).send(data);
});

app.listen(port, ()=>{
	console.log(`listening to ${port}`);
})