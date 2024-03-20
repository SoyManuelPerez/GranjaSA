const Porcino = require('../model/Porcino')

//mostrar
module.exports.mostrar = (req, res) => {
    Porcino.find({})
    .then(porcinos => res.render('porcinos', {porcinos: porcinos}))
    .catch(err => console.log(err, 'Error mostrar porcinos'))
    }
//crear 
module.exports.crear = (req, res) => {
    const porcino = new Porcino ({
        id_por: req.body.id_por,
        raza_por: req.body.raza_por,
        edad_por: req.body.edad_por,
        peso_por: req.body.peso_por,
        alim_por: req.body.alim_por,
        cliente_por: req.body.cliente_por
    })
    cliente.save()
    res.redirect('/porcinos')  
    }
// editar
module.exports.editar = (req,res) =>{
    const raza_por = req.body.raza_por_editar,
    const edad_por = req.body.edad_por_editar,
    const peso_por = req.body.peso_por_editar,
    const alim_por = req.body.alim_por_editar,
    const cliente_por = req.body.cliente_por_editar
    console.log(cedula)
    Porcino.findOneAndUpdate({id_por:id_por},{raza_por, edad_por, peso_por, alim_por, cliente_por})
    .then(resultado=>{
        console.log("Objeto Actualizado : ", resultado); 
    })
    .catch(error=>{
        console.log(error) 
    })
    res.redirect('/porcinos')  
}
// eliminar 
module.exports.eliminar = (req,res) =>{
    const id_por = req.params.id_por
    Cliente.findOneAndDelete({id_por:id_por}).exec()
  .then(resultado => {
    console.log("Objeto eliminado : ", resultado); 
  })
  .catch(error => {
    console.log(error) 
  });
    res.redirect('/porcinos')       
}
