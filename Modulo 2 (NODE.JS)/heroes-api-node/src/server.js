const express = require('express');
const heroeRuta = require('./routes/heroes.route');
const app = express();
app.use(express.json({limit: '5mb'}));
app.use(express.static('public'));


app.use('/heroes',heroeRuta);

app.listen(3001, ()=>{
    console.log('Servidor corriendo en el puerto 3001')
})