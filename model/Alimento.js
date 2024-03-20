const mongoose = require('mongoose')
const aliemnto = new mongoose.Schema ({
    id: Number,
    Descripcion: String,
    Dosis: Number,
})


module.exports = mongoose.model("alimetos", aliemnto)