const Joi = require('joi');

const schemaDatosUsuario = Joi.object({
    nombre: Joi.number().required(),
    email: Joi.string().required(),
});

module.exports = {
    schemaDatosUsuario
};
