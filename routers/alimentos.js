const express = require('express')
const router = express.Router()
const alimetoscontroller = require('../controllers/alimentoController')
//mostrar clientes
router.get('/alimentos',alimetoscontroller.mostrar,(req,res)=>{
res.render('alimento')
})
// agregar clientes
router.post('/crearAlimento',alimetoscontroller.crear)
//Modificar
//router.post('/editar',alimetoscontroller.editar)
module.exports = router