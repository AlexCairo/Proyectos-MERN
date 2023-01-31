const express = require('express');
const router = express.Router();
const controlador = require('../controllers/servicio.controller');

router.get('/listar', (req, res)=>{
    const lista = controlador.listar();
    res.json(lista);
});

router.get('/mostrar/:id', (req, res)=>{
    const { id } = req.params;
    const servicio = controlador.buscarPorId(id);
    res.json(servicio);
});

router.put('/actualizar/estado/:id', (req, res)=>{
    const { id } = req.params;
    const { estado } = req.body;
    const servicio = controlador.editarEstado(id, estado);
    res.json(servicio);
});

module.exports = router;