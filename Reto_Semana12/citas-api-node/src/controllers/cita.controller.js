const citaModel = require('../models/cita.model');

const controller = {
    async listar(req,res){
        try {
            const result = await citaModel.find();
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async guardar(req,res){
        const {fecha, hora, nombre, dni, telefono, email} = req.body;
        const nCita = new citaModel();
        nCita.nombre = nombre;
        nCita.dni = dni;
        nCita.telefono = telefono;
        nCita.email = email;
        nCita.fecha = fecha;
        nCita.hora = hora;
        try {
            const result = await nCita.save();
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async detalle(req,res){
        const {id} = req.params;
        try {
            const result = await citaModel.findById(id);
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async editar(req,res){
        const {id} = req.params;
        const {nombre, dni, telefono, email, fecha, hora} = req.body;
        const nCita = {nombre, dni, telefono, email, fecha, hora};
        try {
            const result = await citaModel.findByIdAndUpdate(id,nCita,{new:true});
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async eliminar(req,res){
        const { id } = req.params;
        try {
            const result = await citaModel.findByIdAndDelete(id);
            res.json({mensaje:"Cita eliminada"});
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

};

module.exports = controller;