const express = require("express");
const router = express.Router();
const controlador = require("../controllers/usuario.controller");
const auth = require("../middlewares/auth");

router.post("/login", (req, res) => {
    controlador.login(req, res);
});

router.get("/listar", auth, (req, res) => {
    controlador.listar(req, res);
});

router.post("/guardar", auth, (req, res) => {
    controlador.guardar(req, res);
});

router.get("/detalle/:id", auth, (req, res) => {
    controlador.buscarPorId(req, res);
});

router.put("/editar/:id", auth, (req, res) => {
    controlador.editar(req, res);
});

router.delete("/eliminar/:id", auth, (req, res) => {
    controlador.eliminar(req, res);
});

module.exports = router;