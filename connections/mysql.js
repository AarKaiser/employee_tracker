// Connecting to MySQL

const mysql = require("mysql2");
const db = mysql.createConnection(
    host: process.env.DB_HOST
    

)

module.exports= {db} 