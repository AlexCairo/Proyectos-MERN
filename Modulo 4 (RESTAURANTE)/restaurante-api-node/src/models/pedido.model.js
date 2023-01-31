const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
    cliente: { type: String, required: true},
    mesa: { type: String, required: true},
    total: { type: Number, required: true},
    fecha: { type: Date, default: Date.now},
    detalle: [{
        plato: { type: String, required: true},
        precio: { type: Number, required: true},
         // P:pendiente | C:cocinando | L:listo | E:entregado | N:anulado
        estado: { type: String, default: "P"}
    }],
    estado: { type: String, default: "A"} // A:activo | T:terminado | N:anulado
},{
    versionKey: false
});

module.exports = mongoose.model("pedido", pedidoSchema);