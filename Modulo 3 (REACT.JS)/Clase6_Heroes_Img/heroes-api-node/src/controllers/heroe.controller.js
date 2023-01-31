const fs = require('fs');
const heroeModel = require('../models/heroe.model');

async function listar(req, res){
    try {
        const lista = await heroeModel.find();
        res.json(lista);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

function crear(req, res){
    const { nombre, imagen, imagen64 } = req.body;
    const ruta = './src/public/img/'+imagen;
    if (fs.existsSync(ruta)) {
        const result = { mensaje: "La imagen ya existe" };
        res.json(result);
    }
    try {
        const buffer = Buffer.from(imagen64, "base64");
        fs.writeFileSync(ruta, buffer);
        const heroe = new heroeModel;
        heroe.nombre = nombre;
        heroe.imagen = imagen;
        heroe.save();
        res.json(heroe);
    } catch (error) {
        console.log('Error => ', error);
        const result = { mensaje: "No se pudo crear el registro" };
        res.status(500).json(result);
    }
}

async function mostrar(req, res){
    try {
        const { id } = req.params;
        const heroe = await heroeModel.findById(id);
        res.json(heroe);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function editar(req, res){
    const { id } = req.params;
    const { nombre, imagen, imagen64 } = req.body;
    try {
        if(imagen64){
            const heroe = await heroeModel.findById(id);
            const rutaImagenActual = './src/public/img/'+heroe.imagen;
            if(fs.existsSync(rutaImagenActual)){
                fs.unlinkSync(rutaImagenActual);
            }
            const rutaNuevaImagen = './src/public/img/'+imagen;
            const buffer = Buffer.from(imagen64, "base64");
            fs.writeFileSync(rutaNuevaImagen, buffer);
        }
        const datos = {
            nombre,
            imagen
        };
        const result = await heroeModel.findByIdAndUpdate(id, datos, {new:true});
        res.json(result);
    } catch (error) {
        console.log(error);
        const result = { mensaje: "No se pudo actualizar el registro" };
        res.status(500).json(result);
    }
}

async function eliminar(req, res){
    const { id } = req.params;
    try {
        const heroe = await heroeModel.findById(id);
        const ruta = './src/public/img/'+heroe.imagen;
        if(fs.existsSync(ruta)){
            fs.unlinkSync(ruta);
        }
        await heroeModel.findByIdAndDelete(id);
        const result = { mensaje: "Registro eliminado" };
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = { mensaje: "No se pudo eliminar el registro" };
        res.status(500).json(result);
    }
}

module.exports = { listar, crear, mostrar, editar, eliminar };