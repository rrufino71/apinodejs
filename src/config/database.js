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

//produccion 1
// const pool = mysql.createPool({
//    host: process.env.MYSQLHOST,
//    user: process.env.MYSQLUSER,
//    password: process.env.MYSQ_ROOT_PASSWORD,
//    database: process.env.MYSQLDATABASE,
//    port: process.env.MYSQLPORT,
//    waitForConnections: true,
//    connectionLimit: 10
// });

//produccion prueba rialway
//const pool = mysql.createPool({
//   host: "mysql.railway.internal",
//   user: "root",
//   password: "gpoJpBCxaOecsrufRhzjriveoYfzKSOv",
//   database: "railway",
//   port: 3306,
//   waitForConnections: true,
//   connectionLimit: 10
//});

// //produccion hostinger manual
//  const pool = mysql.createPool({
//     host: "localhost",
//     user: "u325607018_root",
//     password: "Inti12223906",
//     database: "u325607018_apidb",
//     port: 3306,
//     waitForConnections: true,
//     connectionLimit: 10
//  });

//produccion hostinger con variables de entorno
 const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10
 });


module.exports = pool;