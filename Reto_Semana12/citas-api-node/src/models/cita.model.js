const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pacienteModel = new Schema({
    nombre : { type:String, required:true},
    dni : {type:String, required:true, unique:true, maxlenght:8},
    telefono : {type:String, required:true, minlenght:9},
    email : {type:String},
    fecha : {type:String, required:true},
    hora : {type:String, required:true}
},{versionKey:0});

module.exports = mongoose.model('cita',pacienteModel);