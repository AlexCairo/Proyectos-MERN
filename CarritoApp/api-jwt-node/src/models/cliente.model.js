const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    nombres: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    estado: { type: String, default: 'A' } // A:activo | I:inactivo
});

module.exports = mongoose.model('cliente', clienteSchema);