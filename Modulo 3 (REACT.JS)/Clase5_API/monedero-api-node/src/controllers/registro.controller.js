const model = require('../models/registro.model');

const controlador = {
    async listar(req, res){
        try {
            const result = await model.find();
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async guardar(req, res){
        const { descripcion, tipo, monto } = req.body;
        const dato = new model;
        dato.descripcion = descripcion;
        dato.tipo = tipo;
        dato.monto = monto;
        try {
            const result = await dato.save();
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async buscarPorId(req, res){
        const { id } = req.params;
        try {
            const result = await model.findById(id);
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async editar(req, res){
        const { id } = req.params;
        const { descripcion, tipo, monto } = req.body;
        const datos = {
            descripcion,
            tipo,
            monto
        };
        try {
            const result = await model.findByIdAndUpdate(id, datos,{new:true});
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async eliminar(req, res){
        const { id } = req.params;
        try {
            const result = await model.findByIdAndDelete(id);
            res.sendStatus(200);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
}

module.exports = controlador;