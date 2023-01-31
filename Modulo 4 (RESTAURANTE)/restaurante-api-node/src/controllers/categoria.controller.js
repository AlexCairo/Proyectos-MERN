const categoriaModel = require("../models/categoria.model");

const controlador = {
    async listar(req, res){
        try {
            const result = await categoriaModel.find();
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async guardar(req, res){
        const { nombre } = req.body;
        const dato = new categoriaModel();
        dato.nombre = nombre;
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
            const result = await categoriaModel.findById(id);
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async editar(req, res){
        const { id } = req.params;
        const { nombre, estado } = req.body;
        const datos = {
            nombre, 
            estado
        };
        try {
            const result = await categoriaModel.findByIdAndUpdate(id, datos, {"new":true});
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async eliminar(req, res){
        try {
            const { id } = req.params;
            await categoriaModel.findByIdAndDelete(id);
            res.sendStatus(200);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
};

module.exports = controlador;