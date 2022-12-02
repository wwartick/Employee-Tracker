const mysql = require('mysql2');
require('dotenv').config();

// connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employee_db'
  }
);

module.exports = db;