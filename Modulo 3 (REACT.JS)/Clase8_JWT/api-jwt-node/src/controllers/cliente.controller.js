const encryptPassword = require('encrypt-password');
const config = require('../config');
const clienteModel = require('../models/cliente.model');

const controlador = {
    async listar(req, res){
        try {
            const result = await clienteModel.find();
            res.json(result);
        } catch (error) {
            console.log(error);
            res.status(500).send('Error en el listado');
        }
    },
    async guardar(req, res){
        try {
            const { nombres, email, clave } = req.body;
            const cliente = new clienteModel();
            cliente.nombres = nombres;
            cliente.email = email;
            cliente.password = encryptPassword(clave, config.SECRET_KEY);
            const result = await cliente.save();
            res.json(result);
        } catch (error) {
            console.log(error);
            res.status(500).send('Error al guardar el cliente');
        }
    }
};

module.exports = controlador;
