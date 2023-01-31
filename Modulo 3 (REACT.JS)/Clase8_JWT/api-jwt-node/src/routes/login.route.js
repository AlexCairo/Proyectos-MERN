const express = require('express');
const router = express.Router();
const controlador = require('../controllers/login.controller');

router.post('/login', (req, res)=>{
    controlador.login(req, res);
});

module.exports = router;