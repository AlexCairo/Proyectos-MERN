let lista = [];
let nextID = 1;

function listar(){
    return lista;
}

function crear(datos){
    let libro = {
        id: nextID,
        titulo: datos.titulo,
        autor: datos.autor
    }
    lista.push(libro);
    nextID++;
    return libro;
}

function editar(id, datos){
    let libro = lista.find(elem=>elem.id==id);
    libro.titulo = datos.titulo;
    libro.autor = datos.autor;
    return libro;
}

function eliminar(id){
    lista = lista.filter(elem=>elem.id!=id);
    return {mensaje:"Libro eliminado"};
}

module.exports = { listar, crear ,editar , eliminar};
