const express = require('express')
const router = express.Router()
const clienteController = require('../controllers/clienteController')
//mostrar clientes
router.get('/clientes', clienteController.mostrar,(req,res)=>{
res.render('clientes')
})
// agregar clientes
router.post('/crearCliente',clienteController.crear)
//Modificar
router.post('/editarCliente',clienteController.editar)
// Eliminar
router.get('/borrarCliente/:cedula',clienteController.eliminar)
module.exports = router
