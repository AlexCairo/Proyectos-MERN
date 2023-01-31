var express = require('express');
var router = express.Router();

// http://localhost:3000/categorias/
router.get('/', function(req, res) {
  res.send('modulo de categorias');
});

// http://localhost:3000/categorias/listar
router.get('/listar', function(req, res) {
  const lista =  [
    {id:1, nombre : "Cursos de Programación"},
    {id:2, nombre : "Cursos de Diseño"},
    {id:3, nombre : "Cursos de Ofimática"},
  ];
  res.render('categories',{categorias : lista});
});

// http://localhost:3000/categorias/mostrar/89
router.get('/mostrar/:id', function(req, res) {
  const { id } = req.params;
  res.send('mostrando datos de la categoria '+id);
});

module.exports = router;
