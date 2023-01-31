const Joi = require('joi');

const schemaIdLibro = Joi.object({
    id: Joi.number().min(1).required()
});

const schemaDatosLibro = Joi.object({
    titulo: Joi.string().required(),
    autor: Joi.string().required(),
});

module.exports = {
    schemaIdLibro,
    schemaDatosLibro
};
