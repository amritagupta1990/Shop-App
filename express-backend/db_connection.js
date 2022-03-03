var mysql = require('mysql2');

var pool = mysql.createPool({
    connectionLimit: 1,
    host: "127.0.0.1",
    user: "root",
    password: "Amrita@12345",
    database:"sakila"
});

module.exports = pool;