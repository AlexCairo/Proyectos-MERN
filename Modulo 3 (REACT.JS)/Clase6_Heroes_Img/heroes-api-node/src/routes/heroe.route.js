const express = require('express');
const router = express.Router();
const controller = require('../controllers/heroe.controller');

router.get('/listar', ( req, res)=>{
    controller.listar(req, res);
});

router.post('/crear', ( req, res)=>{
    controller.crear(req, res);
});

router.get('/mostrar/:id', (req, res)=>{
    controller.mostrar(req, res);
});

router.put('/editar/:id', ( req, res)=>{
    controller.editar(req, res);
});

router.delete('/eliminar/:id', ( req, res)=>{
    controller.eliminar(req, res);
})

module.exports = router;