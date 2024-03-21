const express = require('express')
const router = express.Router()
const porcinoController = require('../controllers/porcinoController')
//mostrar porcinos
router.get('/',porcinoController.mostrar,(req,res)=>{
    res.render('porcinos')})
// agregar porcinos
router.post('/crear',porcinoController.crear)
//Modificar
router.post('/editar',porcinoController.editar)
// Eliminar
router.get('/borrar/:id_por',porcinoController.eliminar)

module.exports = router