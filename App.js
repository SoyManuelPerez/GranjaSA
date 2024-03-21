const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

mongoose.connect('mongodb://localhost/granjaSA' , { useNewUrlParser: true, useUnifiedTopology: true })
.then(db => console.log('Conectado a la BD '))
.catch( err => console.log(err));

app.use(express.static('public'))
const clientes = require('./routers/clientes')
const alimentos = require('./routers/alimentos')
const Porcino = require('./routers/porcinos')
app.use(Porcino)
app.use(clientes)
app.use(alimentos)

app.listen(3000, ()=>{
    console.log('Servidor corriendo en localhost:3000')
})