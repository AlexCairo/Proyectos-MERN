const jwt = require('jsonwebtoken');
const config = require('../config');

function login(datos){
    const {usuario, clave} = datos;
    payload = {
        userId: 1734,
        user: usuario,
        email: 'user@gmail.com',
        rol: 'admin'
    }
    const token = jwt.sign(
        payload,
        config.SECRET_KEY,
        {expiresIn: config.TOKEN_EXPIRE}
    );
    return token;
}

module.exports = {login};