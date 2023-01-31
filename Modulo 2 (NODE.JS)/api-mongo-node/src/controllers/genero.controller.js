const generoModel = require('../models/genero.model');

const controlador = {
	async listar(req, res){
    	try {
        	// db.generos.find();
        	const result = await generoModel.find();
        	res.json(result);
    	} catch (error) {
        	console.log(error);
        	res.sendStatus(500);
    	}
	},
	async guardar(req, res){
    	try {
        	//db.generos.insertOne({})
        	const genero = new generoModel();
        	genero.nombre = req.body.nombre;
        	const result = await genero.save();
        	res.json(result);
    	} catch (error) {
        	console.log(error);
        	res.sendStatus(500);
    	}
	},
    async buscarPorId(req, res){
    	try {
        	const id = req.params.id;
        	const result = await generoModel.findById(id);
        	res.json(result);
    	} catch (error) {
        	console.log(error);
        	res.sendStatus(500);
    	}
    },
    async editar(req, res){
    	try {
        	const { id } = req.params;
        	const { nombre, estado } = req.body;
        	const update = { nombre, estado };
		const options = { new: true };
        	const result = await generoModel.findByIdAndUpdate(id, update ,options);
        	res.json(result);
    	} catch (error) {
        	console.log(error);
        	res.sendStatus(500);
    	}
    }


};

module.exports = controlador;
