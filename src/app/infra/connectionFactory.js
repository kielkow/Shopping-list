const mysql = require('mysql')

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'shoplist'
    })
}

module.exports = () => {
    return createDBConnection
}