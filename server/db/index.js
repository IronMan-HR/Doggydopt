var mysql = require('mysql');
var credentials = JSON.parse(process.env.credentials);
//var credentials = process.env.crendentials || require('../../config.js') ;

console.log("inside db/index.js, after db.connect()", credentials);
console.log('host:', credentials.host);
module.exports = connection = mysql.createConnection({
    host: credentials.host,
    user: credentials.user,
    password: credentials.password,
    database: credentials.database
});
