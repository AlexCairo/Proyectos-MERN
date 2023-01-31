const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const objetoSchema = new Schema({
    descripcion: { type: String, required: true },
    tipo: { type: String, required: true }, // E:entrada | S:salida
    monto: { type: Number, required: true },
    fecha_creacion: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('registro', objetoSchema);