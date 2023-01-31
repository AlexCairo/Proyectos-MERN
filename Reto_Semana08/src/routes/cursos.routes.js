const express = require('express');
const controlador = require('../controllers/cursos.controller');
const router = express.Router();

router.get('/listar',(req,res)=>{
    res.json(controlador.listar());
});

router.get('/mostrar/:id',(req,res)=>{
    const {id} = req.params;
    const curso = controlador.mostrar(id);
    if(!curso){
        res.status(404).send('Curso no encontrado');
    }else{
        res.json(curso);
    }
})

router.post('/crear',(req,res)=>{
    res.json(controlador.crear(req.body));
})

router.put('/actualizar/:id',(req,res)=>{
    const {id} = req.params;
    const datos = {nombre,descripcion,precio} = req.body;
    res.json(controlador.actualizar(datos,id));
})

router.delete('/eliminar/:id',(req,res)=>{
    const {id} = req.params;
    const resultado = controlador.eliminar(id);
    if (resultado){
        res.json({mensaje : 'Curso Eliminado ... '})
    }else{
        res.status(404).send('Curso no encontrado')
    }
})

module.exports = router;