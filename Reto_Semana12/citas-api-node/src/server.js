const express = require('express');
const app = express();
const rutasCitas = require('./routes/cita.route');
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/registrosCitas')
.then( () => {
    console.log('Conectado a la base de datos');
})
.catch( () => {
    console.log('Error al conectar a la base de datos');
})

app.use('/cita',rutasCitas);

app.listen(3001,()=>{
    console.log('Servidor corriendo en el puerto 3001');
});

