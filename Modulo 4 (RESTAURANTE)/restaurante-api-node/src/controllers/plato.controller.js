const fs = require("fs");
const platoModel = require("../models/plato.model");

const controlador = {
    async listar(req, res){
        try {
            const result = await platoModel.find();
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async guardar(req, res){
        const { categoria, nombre, precio, imagen, imagen64 } = req.body;
        const dato = new platoModel();
        dato.categoria_id = categoria;
        dato.nombre = nombre;
        dato.precio = precio;
        if(imagen){
            const buffer = Buffer.from(imagen64, "base64");
            fs.writeFileSync("./public/platos/"+imagen, buffer);
            dato.imagen = imagen;
        }
        try {
            const result = await dato.save();
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async buscarPorId(req, res){
        try {
            const { id } = req.params;
            const result = await platoModel.findById(id);
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async editar(req, res){
        const { id } = req.params;
        const { categoria, nombre, precio, imagen, imagen_actual, imagen64, estado } = req.body;
        const datos = {
            categoria_id: categoria,
            nombre, 
            precio, 
            estado
        };
        if(imagen){
            const path_img = "./public/platos/";
            if(imagen_actual!="default.png"){
                fs.unlinkSync(path_img+imagen_actual);
            }
            const buffer = Buffer.from(imagen64, "base64");
            fs.writeFileSync(path_img+imagen, buffer);
            dato.imagen = imagen;
        }
        try {
            const result = await platoModel.findByIdAndUpdate(id, datos, {"new":true});
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    async eliminar(req, res){
        const { id, img } = req.params;
        if(img!="default.png"){
            fs.unlinkSync("./public/platos"+img);
        }
        try {
            await platoModel.findByIdAndDelete(id);
            res.sendStatus(200);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
};

module.exports = controlador;