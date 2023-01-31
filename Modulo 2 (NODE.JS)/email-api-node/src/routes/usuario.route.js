const express = require('express');
const router = express.Router();
const controlador = require('../controllers/usuario.controller');

router.post('/registro', (req, res)=>{
	controlador.registrar(req, res);
});

router.get('/listar', (req, res)=>{
	const resp = controlador.listar();
	res.json(resp);
});

router.get('/detalle/:id', (req, res)=>{
	const { id } = req.params;
	const resp = controlador.buscarPorId(id);
	res.json(resp);
});

module.exports = router;
