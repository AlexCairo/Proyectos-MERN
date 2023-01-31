const express = require('express');
const app = express();
const Rutascursos = require('./routes/cursos.routes');
app.use(express.json());

app.use('/cursos',Rutascursos);

app.listen(3000, ()=>{
    console.log('Servidor iniciado en el puerto 3001');
});