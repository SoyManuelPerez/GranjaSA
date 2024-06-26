const Alimento = require('../model/Alimento')

//mostrar
module.exports.mostrar = (req, res) => {
    Alimento.find({})
    .then(alimentos => res.render('alimento', {alimentos: alimentos}))
    .catch(err => console.log(err, 'Error mostrar clientes'))
    }
//crear 
module.exports.crear = (req, res) => {
    const alimentos = new Alimento ({
        codigo:req.body.id,
        Nombre: req.body.Descripcion ,
        Dosis : req.body.Dosis
    })
    alimentos.save()
    res.redirect('/alimentos')  
    }
// editar
module.exports.editar = (req,res) =>{
    const codigo = req.body.id_editar
    const Nombre = req.body.nombre_editar
    const Dosis = req.body.dosis_editar
    Alimento.findOneAndUpdate({id:codigo},{Nombre,Dosis})
    .then(resultado=>{
        console.log("Objeto Actualizado : ", resultado); 
    })
    .catch(error=>{
        console.log(error) 
    })
    res.redirect('/alimentos')  
}
// eliminar 
module.exports.eliminar = (req,res) =>{
    const id = req.params.codigo
    console.log(id)
    Alimento.findOneAndDelete({codigo:id}).exec()
  .then(resultado => {
    console.log("Objeto eliminado : ", resultado); 
  })
  .catch(error => {
    console.log(error) 
  });
    res.redirect('/alimentos')       
}


