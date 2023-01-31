const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/tienda-g1')
.then(()=>{
    console.log('Conectados a la base de datos');
})
.catch((err)=>{
    console.log('Error al conectar DB: ', err);
});

const auth = require('./middlewares/auth.middleware');
const servicioRutas = require('./routes/servicio.route');
const clienteRutas = require('./routes/cliente.route');
const ventaRutas = require('./routes/venta.route');
const loginRutas = require('./routes/login.route');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', loginRutas);
app.use('/clientes', clienteRutas);

app.use(auth);
app.use('/servicios', servicioRutas);
app.use('/ventas', ventaRutas);

app.listen(3001, ()=>{
    console.log('Servidor iniciado en el puerto 3001');
});