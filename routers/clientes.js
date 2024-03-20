const express = require('express')
const router = express.Router()
const clienteController = require('../controllers/clienteController')
router.get('/',(req,res)=>{
    res.render('index')})
//mostrar clientes
router.get('/clientes', clienteController.mostrar,(req,res)=>{
res.render('clientes')
})
// agregar clientes
router.post('/crear',clienteController.crear)
//Modificar
router.post('/editar',clienteController.editar)
// Eliminar
router.get('/borrar/:id',clienteController.eliminar)
module.exports = router
