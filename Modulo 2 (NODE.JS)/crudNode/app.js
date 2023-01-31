const libros = require('./controllers/libro.controller')
 
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res)=>{
    const respuesta = {
        mensaje: 'Hola mundo'
    };
    res.json(respuesta);
});

// Listar
app.get('/libros', (req, res)=>{
    res.json(libros.listar());
});

// Crear
app.post('/libro', (req, res)=>{
    res.json(libros.crear(req.body));
});

//Editar
app.put('/libro/:id',(req,res)=>{
    const {id} = req.params;
    const datos = req.body;
    let libro = libros.editar(id,datos);
    res.json(libro);
});

// Eliminar
app.delete('/libro/:id', (req, res)=>{
    const { id } = req.params;
    let mensaje = libros.eliminar(id);
    console.log(mensaje)
    res.json(mensaje);
});



app.listen('3001', ()=>{
    console.log('Servicio iniciado en el puerto 3001');
});
