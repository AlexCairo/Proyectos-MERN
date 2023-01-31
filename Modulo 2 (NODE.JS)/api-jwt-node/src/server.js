const express = require('express');
const servicioRutas = require('./routes/servicio.route');
const loginRutas = require('./routes/login.route');
const auth = require('./middlewares/auths.middleware');

const app = express();
app.use(express.json());

app.use('/usuarios',loginRutas);

app.use(auth);

app.use('/servicios', servicioRutas);

app.listen(3001, ()=>{
	console.log('Servidor iniciado en el puerto 3001');
});
