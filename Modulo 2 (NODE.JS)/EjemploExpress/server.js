const express = require('express');
const server = express();

server.use(express.urlencoded({ extended: true }));

server.get('/',(request,response)=>{
    response.send('<h1>Hola<h1/>');
});

server.get('/nosotros',(request,response)=>{
    response.send('<h1>Nosotros<h1/>')
});

server.get('/contactanos',(request,response)=>{
    response.send('<h1>Contactanos<h1/>')
});

server.post('/contactanos',(request,response)=>{
    console.log('----------------------- Request -----------------------');
    console.log(request);
    response.send('<h1>Gracias por contactarnos<h1/>')
});

server.get('/servicios/delivery',(request,response)=>{
    response.send('<h1>Delivery<h1/>')
});

server.get('/servicios/entrenamiento',(request,response)=>{
    response.send('<h1>Delivery<h1/>')
});

server.get('/servicios/:nombre/detalle',(request,response)=>{
    const servicioNombre = request.params.nombre;
    response.send(`<h1>${servicioNombre}<h1/>`);
});

server.get('/pedido/cliente/:idcliente/detalle/:idpedido',(request,response)=>{
    console.log(request);
    //Destructuring
    const {idcliente, idpedido} = request.params;
    const html = `<h1>Detalle Del Pedido</h1>
                  <p>Cliente : ${idcliente}<p/>
                  <p>Pedido : ${idpedido}<p/>`
    response.send(html);
});

server.get('/pedido/listar',(request, response)=>{
    console.log(request);
    const {pag, limit} = request.query;
    const html = `<h1>Listar Pedido</h1>
                  <p>Pagina: ${pag}</p>
                  <p>Registro por pag: ${limit}</p>`;
    response.send(html);
});

server.post('/pedido/:codigo/crear',(request, response)=>{
    console.log(request);
    const { codigo } = request.params;
    const { session } = request.query;
    const html = `<h1>Crear Pedido por Código de Usuario</h1>
                  <p>Codigo: ${codigo}</p>
                  <p>Session: ${session}</p>`;
    response.send(html);
});

server.listen(3001,()=>{
    console.log('Servidor operativo en el puerto 3001')
})