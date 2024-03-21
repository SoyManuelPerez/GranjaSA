const express = require('express')
const router = express.Router()
const clienteController = require('../controllers/clienteController')
//mostrar clientes
router.get('/clientes', clienteController.mostrar,(req,res)=>{
res.render('clientes')
})
// agregar clientes
router.post('/crear',clienteController.crear)
//Modificar
router.post('/editar',clienteController.editar)
// Eliminar
router.get('/borrar/:cedula',clienteController.eliminar)
module.exports = router
