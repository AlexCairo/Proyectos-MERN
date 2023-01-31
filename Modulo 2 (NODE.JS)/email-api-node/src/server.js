const express = require('express');
const app = express();

const loginRutas = require('./routes/login.route');
const usuarioRutas = require('./routes/usuario.route');

app.use(express.json());

app.use('/auth', loginRutas);
app.use('/usuario', usuarioRutas);

app.listen(3001, ()=>{
	console.log('Servidor iniciado en el puerto 3001');
});
