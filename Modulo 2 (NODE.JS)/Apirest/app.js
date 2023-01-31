const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res)=>{
    const respuesta = {
        mensaje: 'Hola mundo'
    };
    res.json(respuesta);
});

app.get('/producto', (req, res)=>{ // Listar todos los productos
    // SELECT * FROM productos
    let lista = [
        {cod:11, nom:"Producto 01", precio:80},
        {cod:12, nom:"Producto 02", precio:20},
        {cod:13, nom:"Producto 03", precio:70},
        {cod:14, nom:"Producto 04", precio:10},
        {cod:15, nom:"Producto 05", precio:60}
    ];
    res.json(lista);
});

app.get('/producto/:id', (req, res)=>{
    const detalle = {
        cod:13, 
        nom:"Producto 03", 
        precio:70
    };
    res.json(detalle);
});

// Crear nuevo producto
app.post('/producto',(req, res)=>{
    const {nombre, precio} = req.body;
    const dato = {
        nombre,
        precio
    }
    // Insertar datos
    res.json({cod : 16 , ...dato});
})

// Editar un producto
app.put('/producto/:cod', (req, res)=>{
    const { cod } = req.params;
    const { nombre, precio } = req.body;
    const datos = {
        nombre,
        precio
    };
    // UPDATE productos SET nombre=:nombre, precio=:precio WHERE cod=:cod
    res.json({cod:+cod, ...datos});
});

// Eliminar un producto
app.delete('/producto/:cod', (req, res)=>{
    const { cod } = req.params;
    // DELETE FROM productos WHERE cod=:cod <= Físicamente
    // UPDATE productos SET estado=0 WHERE cod=:cod <= Lógicamente
    res.json({mensaje: "ok"});
});


app.listen('3001', ()=>{
    console.log('Servicio iniciado en el puerto 3001');
})
