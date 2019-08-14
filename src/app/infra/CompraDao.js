function CompraDao(connection){
    this._connection = connection
}

CompraDao.prototype.lista = (compra, callback) => {
    this.connection.query('SELECT * FROM compras', callback)
}

module.exports = () => {
    return CompraDao
}