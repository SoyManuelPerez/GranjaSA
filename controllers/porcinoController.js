const Porcino = require('../model/Porcino')
const porcinos = require('../model/Cliente')
const alimentos = require('../model/Alimento')
//mostrar
module.exports.mostrar = (req, res) => {
    Promise.all([
        alimentos.find({}),
        porcinos.find({}),
        Porcino.find({})
    ])
    .then(([alimentos, porcinos, Porcino]) => {
        res.render('porcinos', { alimentos: alimentos, porcinos: porcinos , Porcino:Porcino});
    })
    .catch(err => console.log(err, 'Error mostrando datos'));
};
//crear 
module.exports.crear = (req, res) => {
    const porcino = new Porcino ({
        id_por: req.body.id_por,
        raza_por: req.body.raza_por,
        edad_por: req.body.edad_por,
        peso_por: req.body.peso_por,
        alim_por: req.body.alim_por,
        cli_por: req.body.cli_por
    })
    porcino.save()
    res.redirect('/')  
    }
// editar
module.exports.editar = (req,res) =>{
    const id_por = req.body.id_por_editar
    const raza_por = req.body.raza_por_editar;
    const edad_por = req.body.edad_por_editar;
    const peso_por = req.body.peso_por_editar;
    const alim_por = req.body.alim_por_editar;
    const cli_por = req.body.cliente_por_editar;
    Porcino.findOneAndUpdate({id_por:id_por},{raza_por, edad_por, peso_por, alim_por, cli_por})
    .then(resultado=>{
        console.log("Objeto Actualizado : ", resultado); 
    })
    .catch(error=>{
        console.log(error) 
    })
    res.redirect('/')  
}
// eliminar 
module.exports.eliminar = (req,res) =>{
    const id_por = req.params.id_por
    Porcino.findOneAndDelete({id_por:id_por}).exec()
  .then(resultado => {
    console.log("Objeto eliminado : ", resultado); 
  })
  .catch(error => {
    console.log(error) 
  });
    res.redirect('/')       
}
