module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send('Server is running')
    })

    app.get('/compras', (req, res) => {
        res.marko(require('../views/home.marko'))
    })
}