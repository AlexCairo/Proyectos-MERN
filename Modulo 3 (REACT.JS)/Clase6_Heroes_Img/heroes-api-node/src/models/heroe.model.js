const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const objetoSchema = new Schema({
    nombre: { type: String, required: true},
    imagen: { type: String, required: true}
});

module.exports = mongoose.model('heroe', objetoSchema);