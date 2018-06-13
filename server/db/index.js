var mysql = require('mysql');
var credentials =  process.env.credentials;

//Sets up the login information for the database whether from the deployment environment or locally.
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

// module.exports = connection = mysql.createConnection({
//     host: credentials.host,
//     user: credentials.user,
//     password: credentials.password,
//     database: credentials.database
// });

//local db for testing
module.exports = connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Dogs'
});