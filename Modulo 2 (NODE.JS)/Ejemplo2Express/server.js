const express = require('express');
const validator = require('express-joi-validation').createValidator({});
const { schemaPedido } = require('./schemas/pedido.schema');

const server = express();
// Definimos la recepción de datos en formato json
server.use(express.json());

server.post('/pedido/nuevo', validator.query(schemaPedido), (req, res)=>{
    const { nombre, apellido, producto } = req.body;
    const html = `<h1>Pedido Nuevo</h1>
                  <p>Nombre: ${nombre}</p>
                  <p>Apellido: ${apellido}</p>
                  <p>Producto: ${producto}</p>`;
    res.status(201).send(html);
});

server.delete('/pedido/eliminar/:idpedido', (req, res)=>{
    const { nombre, apellido, producto } = req.body;
    res.sendStatus(202);
});

server.listen(3001, ()=>{
    console.log('Servidor habilitado en el puerto 3001');
});