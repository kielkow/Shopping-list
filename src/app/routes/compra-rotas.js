module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send('Server is running')
    })

    app.get('/compras', (req, res) => {
        res.send('Compras')
    })
}