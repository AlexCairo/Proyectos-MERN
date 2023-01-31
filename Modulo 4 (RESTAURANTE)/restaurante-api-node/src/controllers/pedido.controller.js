const pedidoModel = require("../models/pedido.model");

const controlador = {
    async listar(req, res){
        try {
            const result = await pedidoModel.find();
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async guardar(req, res){
        const { cliente, mesa, total, detalle } = req.body;
        const dato = new pedidoModel();
        dato.cliente = cliente;
        dato.mesa = mesa;
        dato.total = total;
        dato.detalle = detalle;
        try {
            const result = await dato.save();
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async buscarPorId(req, res){
        try {
            const { id } = req.params;
            const result = await pedidoModel.findById(id);
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async editar(req, res){
        const { id } = req.params;
        const { cliente, mesa, total, detalle, estado } = req.body;
        const datos = {
            cliente, 
            mesa, 
            total, 
            detalle, 
            estado
        };
        try {
            const result = await pedidoModel.findByIdAndUpdate(id, datos, {"new":true});
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
};

module.exports = controlador;