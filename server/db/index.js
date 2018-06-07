var mysql = require('mysql');
var credentials = process.env.credentials;
//var credentials = process.env.crendentials || require('../../config.js') ;

module.exports = connection = mysql.createConnection({
    host: credentials.host,
    user: credentials.user,
    password: credentials.password,
    database: credentials.database
});