const express = require('express');

const server = express();

server.use(express.static('public'));

server.get('/',(req,res)=>{
    res.send('<h1>Pagina de Inicio<h1/>');
})

server.listen(3001,()=>{
    console.log('Servidor habilitado en el puerto 3001');
});

