let {nextId,cursos} = require('../data/cursos.data.json');
const fs = require('fs');
function listar(){
    return cursos;
}

function mostrar(id){
    const curso = cursos.find(elem=>elem.id == id);
    if(curso){
        return curso;
    }else{
        return false;
    }
}

function crear(datos){
    let nCurso = {
        id:nextId,
        nombre: datos.nombre,
        descripcion: datos.descripcion,
        precio: datos.precio
    }
    const nLista = [...cursos,nCurso];
    const nData = {
        nextId:nextId+1,
        cursos:nLista
    }
    fs.writeFileSync('./src/data/cursos.data.json',JSON.stringify(nData,null,2));
    return nCurso;
}

function actualizar(datos,id){ 
    for(let i = 0;i<=cursos.length;i++){
        if(cursos[i].id == id){
            var nCurso = cursos[i];
            cursos[i].nombre = datos.nombre,
            cursos[i].descripcion = datos.descripcion,
            cursos[i].precio = datos.precio
            break;
        }
    }
    const nData = {
        nextId,
        cursos
    }
    fs.writeFileSync('./src/data/cursos.data.json',JSON.stringify(nData,null,2));
    return nCurso;
}

function eliminar(id){
    let eliminado = false;
    let curso = cursos.find(elem=>elem.id == id);
    if (curso){
        cursos = cursos.filter(elem=>elem.id!=id);
        eliminado = true;
    }
    const nData = {
        nextId,
        cursos
    }
    fs.writeFileSync('.//src/data/cursos.data.json',JSON.stringify(nData,null,2));
    return eliminado;
}

module.exports = {
    listar,
    mostrar,
    crear,
    actualizar,
    eliminar
}