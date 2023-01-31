const citaModel = require('../models/cita.model');

const controlador = {
    async listar(req,res){
        try {
            const result = await citaModel.find();
            res.json(result);
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    },
    async crear(req,res){
        try{
            const nCita = new citaModel();
            nCita.nombre = req.body.nombre;
            nCita.DNI = req.body.DNI;
            nCita.telefono = req.body.telefono;
            nCita.email = req.body.email;
            const result = await nCita.save();
            res.json(result);
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    },
    async mostrar(req,res){
        try {
            const {id} = req.params;
            const result = await citaModel.findById(id);
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async actualizar(req,res){
        try {
            const {id} = req.params;
            const {nombre, DNI, telefono, email} = req.body;
            const update = {nombre, DNI, telefono, email};
            const options = {new : true};
            const result = await citaModel.findByIdAndUpdate(id,update,options);
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async eliminar(req,res){
        try {
            const {id} = req.params;
            const result = await citaModel.findByIdAndDelete(id);
            res.json({mensaje : 'Registro medico eliminado .... '});
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

}

module.exports = controlador;