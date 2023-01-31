let lista = [
    {id:1, titulo:'Mi naranja sabor a manzan', autor:'Jaime Maduro'},
    {id:2, titulo:'Hormigas en la playa', autor:'Karen Silva'},
    {id:3, titulo:'Mi código no compila', autor:'Luis Miranda'}
];

let nextID = 4;

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

function obtener(id){
    let libro = lista.find(elem=>elem.id==id);
    return libro;
}

function editar(id, datos){
    let libro = lista.find(elem=>elem.id==id);
    if(libro){
        libro.titulo = datos.titulo;
        libro.autor = datos.autor;
    }
    return libro;
}

function eliminar(id){
    let eliminado = false;
    let libro = lista.find(elem=>elem.id==id);
    if(libro){
        lista = lista.filter(elem=>elem.id!=id);
        eliminado = true;
    }
    return eliminado;
}


module.exports = { listar, crear, obtener, editar, eliminar };
