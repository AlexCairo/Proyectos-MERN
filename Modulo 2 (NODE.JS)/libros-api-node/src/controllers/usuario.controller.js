
let lista = [
    {id:1, nombre:'Miguel Linares', email:'mlinares@mail.com'},
    {id:2, nombre:'Laura Gomez', email:'lgomez@mail.com'},
    {id:3, nombre:'Jose Mendoza', email:'jmendoza@mail.com'}
];

let nextID = 4;

function listar(){
    return lista;
}

function crear(datos){
    let usuario = {
        id: nextID,
        nombre: datos.nombre,
        email: datos.email
    }
    lista.push(usuario);
    nextID++;
    return usuario;
}

module.exports = { listar, crear };
