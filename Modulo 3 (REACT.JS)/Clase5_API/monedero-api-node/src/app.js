const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/monedero')
.then(()=>{
    console.log('Conectados a la base de datos');
})
.catch((err)=>{
    console.log('Error en la conexión a la BD: ', err);
});

const registroRutas = require('./routes/registro.route');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/registro', registroRutas);

app.listen(3001, ()=>{
    console.log('Servidor levantado en el puerto 3001')
});