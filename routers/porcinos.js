const express = require('express')
const router = express.Router()
const porcinoController = require('../controllers/porcinoController')
//mostrar porcinos
router.get('/',porcinoController.mostrar,(req,res)=>{
    res.render('porcinos')})
// agregar porcinos
router.post('/crear',porcinoController.crear)
//Modificar
router.post('/editarPorcino',porcinoController.editar)
// Eliminar
router.get('/borrarPorcino/:id_por',porcinoController.eliminar)

module.exports = router