const Cliente = require('../model/Cliente')

//mostrar
module.exports.mostrar = (req, res) => {
    Cliente.find({})
    .then(clientes => res.render('clientes', {clientes: clientes}))
    .catch(err => console.log(err, 'Error mostrar clientes'))
    }
//crear 
module.exports.crear = (req, res) => {
    const cliente = new Cliente ({
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        dir: req.body.direccion,
        tel: req.body.telefono
    })
    cliente.save()
    res.redirect('/clientes')  
    }
// editar
module.exports.editar = (req,res) =>{
    const id= req.body.id
    const cedula = req.body.cedula_editar
    const nombre = req.body.nombre_editar
    const dir = req.body.dir_editar
    const tel = req.body.tel_editar
    Cliente.findByIdAndUpdate(id,{cedula,nombre,dir,tel})
    res.redirect('/clientes')  
}
// eliminar 
module.exports.eliminar = (req,res) =>{
    const id = req.params.id
    Cliente.deleteOne({ _id: id })
    res.redirect('/clientes')       
}
