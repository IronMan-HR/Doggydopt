var mysql = require('mysql');
var credentials = require('../../../config.js');

var connection = createConnection(credentials);

connection.connect();

var queryStr = "INSERT INTO ";

var params = "";

connection.query(queryStr, params, (callback)=>{
    callback(results);
});