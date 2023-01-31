const fs = require('fs');
let lista=[
    {id:1, nombre: "Superman",img:"superman.png"},
    {id:2, nombre: "Shazam", img: "shazamn.png"}
];

let nextId = 3;

function listar(){
    return lista;
}

function crear(datos){
	const { nombre, imagen:img, imagen64 } = datos;
	const ruta = './src/public/img/'+img;
	if (fs.existsSync(ruta)) {
    		return { mensaje: "La imagen ya existe" };
	}
	try {
    	const buffer = Buffer.from(imagen64, "base64");
    	fs.writeFileSync(ruta, buffer);
    	const heroe = {
        	id: nextId,
        	nombre,
        	img
    	}
    	lista.push(heroe);
    	nextId++;
    	return heroe;
	} catch (error) {
    	console.log('Error => ', error);
    	return { mensaje: "No se pudo crear el registro" };
	}
}

function mostrar(id){
    const heroe = lista.find(elem=>elem.id==id);
    return heroe;
}

function editar(id, datos){
	const heroe = lista.find(elem=>elem.id==id);
	if(datos.imagen64){
    	const ruta = './src/public/img/'+heroe.img;
    	fs.unlinkSync(ruta);
    	const buffer = Buffer.from(datos.imagen64, "base64");
    	fs.writeFileSync(ruta, buffer);
	}
	heroe.nombre = datos.nombre;
	heroe.img = datos.imagen;
	return heroe;
}


function eliminar(id){
	const heroe = lista.find(elem=>elem.id==id);
	if(!heroe){
    	return { mensaje: "Registro no encontrado" };
	}
	const ruta = './src/public/img/'+heroe.img;
	if(fs.existsSync(ruta)){
    	fs.unlinkSync(ruta);
	}
	lista = lista.filter(elem=>elem.id!=id);
	return { mensaje: "Registro eliminado" };
}



module.exports= {listar, crear, mostrar, editar, eliminar};