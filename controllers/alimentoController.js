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
        id:req.body.id,
        Descripcion: req.body.Descripcion ,
        Dosis : req.body.Dosis
    })
    
    alimentos.save()
    res.redirect('/alimentos')  
    }
// editar

