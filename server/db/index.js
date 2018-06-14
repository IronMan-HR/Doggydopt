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

module.exports = connection = mysql.createConnection({
<<<<<<< HEAD
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Dogs'
=======
    host: credentials.host,
    user: credentials.user,
    password: credentials.password,
    database: credentials.database
>>>>>>> dev
});