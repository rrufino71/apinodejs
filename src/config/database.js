const mysql = require("mysql2/promise");

const isProduction = process.env.NODE_ENV === "production";


const sql = require("mssql");

const config = {
    server: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT),
    options: {
        encrypt: false,               // true para Azure
        trustServerCertificate: true  // SQL Server local
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

const pool = new sql.ConnectionPool(config);

module.exports = pool;



// const pool = mysql.createPool({
//     host: isProduction ? process.env.DB_HOST : process.env.DB_HOST,
//     user: isProduction ? process.env.DB_USER : process.env.DB_USER,
//     password: isProduction ? process.env.DB_PASSWORD : process.env.DB_PASS,
//     database: isProduction ? process.env.DB_NAME : process.env.DB_NAME,
//     port: isProduction ? process.env.DB_PORT : 3306,
//     waitForConnections: true,
//     connectionLimit: 10
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
//     password: "Inti12223906$",
//     database: "u325607018_apidb",
//     port: 3306,
//     waitForConnections: true,
//     connectionLimit: 10
//  });

//desarrollo
// const pool = mysql.createPool({
//  host: process.env.DB_HOST,
//  user: process.env.DB_USER,
//  password: process.env.DB_PASS,
//  database: process.env.DB_NAME,
//  waitForConnections: true,
//  connectionLimit: 10
// });

// // //produccion hostinger con variables de entorno
//  const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT,
//     waitForConnections: true,
//     connectionLimit: 10
//  });


module.exports = pool;