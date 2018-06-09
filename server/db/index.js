var mysql = require('mysql');
//var credentials = JSON.stringify(process.env.credentials);
//crendentials = JSON.parse(process.env.credentials);
//var credentials = process.env.crendentials || require('../../config.js') ;
// console.log("inside db/index.js, after db.connect()");
// console.log('host:', process.env.host);
var credentials =  process.env.credentials;

if(credentials === undefined) {
    credentials = require('../../config.js') 
} else {
    credentials = {
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    }
}
module.exports = connection = mysql.createConnection({
    host: credentials.host,
    user: credentials.user,
    password: credentials.password,
    database: credentials.database
});

// module.exports = connection = mysql.createConnection({
//     host: process.env.host,
//     user: process.env.user,
//     password: process.env.password,
//     database: process.env.database
// });
