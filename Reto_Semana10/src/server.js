const express = require('express');
const mongoose = require('mongoose');
const app = express();
const rutasCitas = require('./routes/cita.route');
app.use(express.json());

mongoose.connect('mongodb://localhost/citas_medicas')
.then(()=>{
    console.log('Conectado a la base de datos');
})
.catch(err=>{
    console.log('ERROR AL CONECTARSE CON LA BASE DE DATOS');
});


app.use('/citas',rutasCitas);

app.listen(3000,()=>{
    console.log('Servidor iniciado en el puerto 3000');
})