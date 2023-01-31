const express = require('express');
const router = express.Router();
const controlador = require('../controllers/venta.controller');

router.get('/listar', (req, res)=>{
    controlador.listar(req, res);
});

router.post('/guardar', (req, res)=>{
    controlador.guardar(req, res);
});

router.get('/cliente/:idcliente', (req, res)=>{
    controlador.listarPorClienteId(req, res);
});

router.post('/mercadopago', (req, res)=>{
    controlador.mercadopago(req, res);
});

router.put('/actualizar/:idventa', (req, res)=>{
    controlador.actualizar(req, res);
});

module.exports = router;