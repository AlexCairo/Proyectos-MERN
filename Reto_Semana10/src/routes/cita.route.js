const express = require('express');
const controlador = require('../controllers/cita.controller');
const router = express.Router();

router.get('/listar',(req,res)=>{
    controlador.listar(req,res);
});

router.post('/crear',(req,res)=>{
    controlador.crear(req,res);
});

router.get('/mostrar/:id',(req,res)=>{
    controlador.mostrar(req,res);
});

router.put('/actualizar/:id',(req,res)=>{
    controlador.actualizar(req,res);
});

router.delete('/eliminar/:id',(req,res)=>{
    controlador.eliminar(req,res);
});




module.exports = router;