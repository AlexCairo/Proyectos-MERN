const express = require('express');
const app = express();
const libroRutas = require('./routes/libro.route');
const usuarioRutas = require('./routes/usuario.route');

app.use(express.json());

app.use('/libros', libroRutas);
app.use('rutas,', usuarioRutas);

app.listen(3001, ()=>{
    console.log('Servidor habilitado en el puerto 3001');
});
