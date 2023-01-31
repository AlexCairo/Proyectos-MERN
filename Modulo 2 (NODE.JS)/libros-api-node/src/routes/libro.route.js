const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({});
const {
    schemaIdLibro,
    schemaDatosLibro,
} = require('../schemas/libro.schema');
const controller = require('../controllers/libro.controller');

router.get('/listar', (req, res)=>{
    res.json(controller.listar());
});


router.get('/mostrar/:id', validator.params(schemaIdLibro), (req, res)=>{
    const { id } = req.params;
    let libro = controller.obtener(id);
    if(libro){
        res.json(libro);
    }else{
        res.status(404).send('Libro no encontrado');
    }
});


router.post('/crear', validator.body(schemaDatosLibro), (req, res)=>{
    res.json(controller.crear(req.body));
});

router.put('/editar/:id', 
    validator.params(schemaIdLibro), 
    validator.body(schemaDatosLibro), (req, res)=>{
        const { id } = req.params;
        const datos = req.body;
        let libro = controller.editar(id, datos);
        res.json(libro);
    });


router.delete('/eliminar/:id', (req, res)=>{
    const { id } = req.params;
    let resultado = controller.eliminar(id);
    if(resultado){
        res.json({mensajes : "Libro eliminado"});
    }else{
        res.status(404).send('El libro no fue encontrado');
    }
});

module.exports = router;

