const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/heroesG1')
.then(()=>console.log('Conectados a la base de datos'))
.catch(err=>console.log('Error con la conexión a la BD', err));

const heroeRuta = require('./routes/heroe.route');

const app = express();
app.use(cors());
app.use(express.json({limit: '2mb'}));
app.use(express.static('src/public'));
app.use('/heroes', heroeRuta);

app.listen(3001, ()=>{
    console.log('Servidor iniciado en el puerto 3001');
});