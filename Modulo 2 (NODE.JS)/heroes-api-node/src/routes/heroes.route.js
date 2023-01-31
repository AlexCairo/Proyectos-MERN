const express = require('express');
const router = express.Router();
const controller = require('../controllers/heroes.controller');

router.get('/listar',(req,res)=>{
    const lista = controller.listar();
    res.json(lista);
});

router.post('/crear',(req,res)=>{
    const heroe = controller.crear(req.body);
    res.json(heroe);
});

router.get('/mostrar/:id',(req,res)=>{
    const {id} = req.params;
    const heroe= controller.mostrar(id);
    res.json(heroe);
});

router.put('/editar/:id',(req,res)=>{
    const {id} = req.params;
    const heroe= controller.editar(id,req.body);
    res.json(heroe);
});

router.delete('/eliminar/:id',(req,res)=>{
    const {id} = req.params;
    const mensaje = controller.eliminar(id);
    res.json(mensaje);
});

module.exports = router;