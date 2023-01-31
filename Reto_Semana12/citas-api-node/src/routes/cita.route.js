const express = require('express');
const router = express.Router();
const controller = require('../controllers/cita.controller');

router.get('/listar', (req,res) => {
    controller.listar(req,res);
});

router.post('/ingresar', (req,res) => {
    controller.guardar(req,res);
});

router.put('/editar/:id',(req,res)=>{
    controller.editar(req,res);
});

router.delete('/eliminar/:id',(req,res) =>{
    controller.eliminar(req,res);
});

router.get('/detalle/:id',(req,res)=>{
    controller.detalle(req,res);
});

module.exports = router;
