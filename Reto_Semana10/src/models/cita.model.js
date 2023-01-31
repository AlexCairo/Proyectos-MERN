const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    nombre : {type : String, required : true},
    DNI : {type : String, maxlength : 8, unique : true, required : true},
    telefono : {type : String, maxlength : 9, unique : true, required : true},
    email : {type : String, required : true, unique : true},
    fecha_cita : {type : Date, default : Date.now()}
},{
    versionKey : false
});

module.exports = mongoose.model('registro', collectionSchema);