const libroModel = require('../models/libro.model');

const controlador = {
    async listar(){
        try {
            const result = await libroModel.find();
            result.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async guardar (){
        try {
            const {genero_id, titulo} = req.body;
            const libro = new libroModel();
            libro.genero_id = genero_id;
            libro.titulo = titulo;
            const result = await libro.save();
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async buscarPorId(req, res){
    	try {
        	const { id } = req.params;
        	const result = await libroModel.findById(id);
        	res.json(result);
    	} catch (error) {
        	console.log(error);
        	res.sendStatus(500);
    	}
    },
    async eliminar(req, res){
        try {
            const { id } = req.params;
            await libroModel.findByIdAndDelete(id);
            res.sendStatus(200);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }


};

module.exports = controlador;