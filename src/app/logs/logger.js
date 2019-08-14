const winston = require('winston')
const fs = require('fs')
const compraId = require('../../files/compra.json')

if (!fs.existsSync('logs')) {
    fs.mkdirSync('logs')
}

module.exports = new winston.createLogger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: 'compra',
            maxsize: 100000,
            maxFiles: 10
        })
    ]
})