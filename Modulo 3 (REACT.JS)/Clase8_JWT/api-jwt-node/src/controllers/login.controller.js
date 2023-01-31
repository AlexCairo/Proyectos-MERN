const jwt = require('jsonwebtoken');
const encryptPassword = require('encrypt-password');
const clienteModel = require('../models/cliente.model');
const config = require('../config');

async function login(req, res){
    const { usuario, clave } = req.body;
    const password = encryptPassword(clave, config.SECRET_KEY);
    try {
        const cliente = {
            email: usuario,
            password
        };
        const result = await clienteModel.findOne(cliente);
        if(result){
            const payload = {
                userId: result._id,
                user: result.nombres,
                email: result.email
            }
            console.log('payload => ',payload);
            const token = jwt.sign(
                payload, 
                config.SECRET_KEY,
                { expiresIn: config.TOKEN_EXPIRE }
            );
            res.json({token});
        }else{
            res.status(401).send('Credenciales incorrectas');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el login');
    }
}

module.exports = { login };