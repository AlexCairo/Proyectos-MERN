const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
	nombre: { type: String, required: true },
	fecha_creacion: { type: Date, default: Date.now() },
	estado: { type: String, default:'A' } // A:activo | I:inactivo
},{
	versionKey: false
});
// La colección que se crea en mongodb será generos
module.exports = mongoose.model('genero', collectionSchema);
