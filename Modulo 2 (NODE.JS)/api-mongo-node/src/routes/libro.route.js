const express = require('express');
const router = express.Router();
const controlador = require('../controllers/libro.controller');

router.get('/listar', (req, res)=>{
	controlador.listar(req, res);
});

router.post('/guardar', (req, res)=>{
	controlador.guardar(req, res);
});

module.exports = router;

