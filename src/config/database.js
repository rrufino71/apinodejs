const mysql = require("mysql2/promise");


//desarrollo
// const pool = mysql.createPool({
//  host: process.env.DB_HOST,
//  user: process.env.DB_USER,
//  password: process.env.DB_PASS,
//  database: process.env.DB_NAME,
//  waitForConnections: true,
//  connectionLimit: 10
// });

//produccion
 const pool = mysql.createPool({
   host: process.env.MYSQLHOST,
   user: process.env.MYSQLUSER,
   password: process.env.MYSQLPASSWORD,
   database: process.env.MYSQLDATABASE,
   port: process.env.MYSQLPORT
});


module.exports = pool;