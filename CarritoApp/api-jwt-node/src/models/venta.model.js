const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ventaSchema = new Schema({
    cliente_id: { type: Schema.ObjectId, ref: 'cliente', required: true },
    total: { type: Number, required: true }, 
    fecha: { type: Date, default: Date.now() }, 
    detalle: [{
        producto: { type: String, required: true }, 
        precio: { type: Number, required: true }, 
        cantidad: { type: Number, required: true }, 
    }],
    transaccion: { type: String }, // Código de transacción de la pasarela
    estado: { type: String, default: 'S' } // S:sin pagar | P:pagado | E:entregado | N:anulado 
});

module.exports = mongoose.model('venta', ventaSchema);