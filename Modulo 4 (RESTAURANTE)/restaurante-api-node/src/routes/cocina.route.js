const express = require("express");
const router = express.Router();
const controlador = require("../controllers/cocina.controller");

router.get("/listar", (req, res) => {
    controlador.listar(req, res);
});

router.put("/editar/:id", (req, res) => {
    controlador.editar(req, res);
});

module.exports = router;