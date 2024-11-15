// Get the client
const mysql = require("mysql2");

require("dotenv").config();

// Create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
});

module.exports = connection.promise();
