const express = require("express");
const router = express.Router();
const controlador = require("../controllers/pedido.controller");

router.get("/listar", (req, res) => {
    controlador.listar(req, res);
});

router.post("/guardar", (req, res) => {
    controlador.guardar(req, res);
});

router.get("/detalle/:id", (req, res) => {
    controlador.buscarPorId(req, res);
});

router.put("/editar/:id", (req, res) => {
    controlador.editar(req, res);
});

module.exports = router;