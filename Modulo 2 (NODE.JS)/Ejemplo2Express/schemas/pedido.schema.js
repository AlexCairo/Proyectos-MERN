
const Joi = require('joi');

const schemaPedido = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    producto: Joi.string().required()
});

const schemaEliminarPedido = Joi.object({
    idpedido: Joi.number().min(1).required()
});

const schemaMostrarPedido = Joi.object({
    id: Joi.number().min(1).required()
});

module.exports = {
    schemaPedido,
    schemaEliminarPedido,
    schemaMostrarPedido
};