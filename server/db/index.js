var mysql = require('mysql');
//var credentials = JSON.stringify(process.env.credentials);
//crendentials = JSON.parse(process.env.credentials);
//var credentials = process.env.crendentials || require('../../config.js') ;


console.log("inside db/index.js, after db.connect()", credentials);
console.log('host:', credentials.host);
module.exports = connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});
