const express = require('express');
const router = express.Router();
const controlador = require('../controllers/login.controller');

router.post('/login', (req, res)=>{
	const token = controlador.login(req.body);
	res.json({token});
});

module.exports = router;
