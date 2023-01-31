const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const platoSchema = new Schema({
    categoria_id: { type: Schema.ObjectId, ref: "categoria", required: true},
    nombre: { type: String, required: true},
    imagen: { type: String, default: "default.png"},
    precio: { type: Number, required: true},
    estado: { type: String, default: "A"} // A:activo | I:inactivo
},{
    versionKey: false
});

module.exports = mongoose.model("plato", platoSchema);