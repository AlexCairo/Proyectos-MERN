const { usuarios } = require('../data/usuarios.json');

function login(datos){
    let mensaje = 'Datos Incorrectos';
    const { usuario, password } = datos;
    const valUsuario = usuario.toLowerCase();
    usuarios.forEach(elem=> {
        if(elem.email == valUsuario && elem.password == password){
            if(elem.estado == 'A'){
                mensaje = 'OK';
            }else{
                mensaje = 'Usuario Inactivo';
            }
        }
    });
    return mensaje;
}

module.exports = {
    login
}