// MySQL Connection

const mysql = require("mysql2");
require('dotenv').config();
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}
);

console.log("\x1b[32m","\nConnection to SQL sucessful...")
module.exports = { db };