const express = require('express')
const router = express.Router()
const alimetoscontroller = require('../controllers/alimentoController')
//mostrar Alimento
router.get('/alimentos',alimetoscontroller.mostrar,(req,res)=>{
res.render('alimento')
})
// agregar Alimento
router.post('/crearAlimento',alimetoscontroller.crear)
//Modificar
router.post('/editarAlimento',alimetoscontroller.editar)
// Eliminar
router.get('/borrarAlimento/:codigo',alimetoscontroller.eliminar)

module.exports = router