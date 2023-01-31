var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// http://localhost:3000/usuarios/listar
router.get('/listar', function(req, res) {
  res.send('listado de los usuarios');
});

// http://localhost:3000/usuarios/mostrar/89
router.get('/mostrar/:id', function(req, res) {
  const { id } = req.params;
  res.send('mostrando datos del usuario '+id);
});


module.exports = router;
