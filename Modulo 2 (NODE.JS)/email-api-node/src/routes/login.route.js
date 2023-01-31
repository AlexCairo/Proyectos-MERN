const express = require('express');
const router = express.Router();
const controlador = require('../controllers/login.controller');

router.post('/login', (req, res)=>{
	const resp = controlador.login(req.body);
	res.json({resp}); // {resp} = {resp:resp}
});

module.exports = router;
