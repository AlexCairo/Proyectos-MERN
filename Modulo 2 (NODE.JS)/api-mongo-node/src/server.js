const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/libros')
.then(()=>{
	console.log('Conectados a la base de datos');
})
.catch(err=>{
	console.log('Error al conectar a la base de datos: ', err);
});

const generoRutas = require('./routes/genero.route');
const libroRutas = require('./routes/libro.route');

const app = express();
app.use(express.json());

app.use('/genero', generoRutas);
app.use('/libro', libroRutas);

app.listen(3001, ()=>{
	console.log('Servidor iniciado en el puerto 3001');
});
