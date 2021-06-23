const mysql = require('mysql');

const connection = mysql.createPool({
    host: 'db',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'shoppingList'
});

module.exports = connection;