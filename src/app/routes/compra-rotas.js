const { check, validationResult } = require('express-validator')
const logger = require('../logs/logger')

module.exports = (app) => {

    app.get('/compras', (req, res) => {
        res.marko(require('../views/home.marko'))

        const connection = app.infra.connectionFactory()
        const compraDao = new app.infra.CompraDao(connection)

        compraDao.lista((erro, resultado) => {

            if (erro) {
                console.log('Erro na listagem de compras')
                res.status(404).send(erro)
                return
            }

            console.log('Compras encontradas' + JSON.stringify(resultado))
            res.json(resultado)
            return
        })
    })

    app.get('/compras/compra/:id', (req, res) => {

        const id = req.params.id
        console.log('Consultando compra ' + id)

        logger.info('consultando compra ' + id)
    })
}