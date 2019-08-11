const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const consign = require('consign')
//const rotas = require('../app/routes/compra-rotas')
    
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//rotas(app)

consign()
    .include('src/app/routes')
    .into(app)
 
module.exports = app