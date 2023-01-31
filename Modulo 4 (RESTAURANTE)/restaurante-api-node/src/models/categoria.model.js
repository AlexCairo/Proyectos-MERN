const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoriaSchema = new Schema({
    nombre: { type: String, required: true},
    estado: { type: String, default: "A"} // A:activo | I:inactivo
},{
    versionKey: false
});

module.exports = mongoose.model("categoria", categoriaSchema);