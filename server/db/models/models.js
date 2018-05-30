var mysql = require('mysql');
var credentials = require('../../../config.js');

var connection = createConnection(credentials);

connection.connect();

var queryStr = "";

var params = "";

connection.query(queryStr, params, (callback)=>{
    callback(results);
});