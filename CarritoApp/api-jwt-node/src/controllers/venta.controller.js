const mercadopago = require('mercadopago');
const ventaModel = require('../models/venta.model');

mercadopago.configure({
    access_token: 'TEST-3036253753124528-101402-78f0ee75b835e9cdfcc90bc062fc9b3e-840831039'
});

const controlador = {
    async listar(req, res){
        try {
            const result = await ventaModel.find();
            res.json(result);
        } catch (error) {
            console.log(error);
            res.status(500).send('Error en el listado');
        }
    },
    async guardar(req, res){
        try {
            const { cliente_id, total, detalle } = req.body;
            const venta = new ventaModel();
            venta.cliente_id = cliente_id;
            venta.total = total;
            venta.detalle = detalle;
            const result = await venta.save();
            res.json(result);
        } catch (error) {
            console.log(error);
            res.status(500).send('Error al guardar la venta');
        }
    },
    async listarPorClienteId(req, res){
        try {
            const { idcliente } = req.params;
            const result = await ventaModel.find({cliente_id: idcliente});
            res.json(result);
        } catch (error) {
            console.log(error);
            res.status(500).send('Error en el listado');
        }
    },
    async mercadopago(req, res){
        // Paso1: Guardamos la venta
        const { cliente_id, total, detalle } = req.body;
        const venta = new ventaModel();
        venta.cliente_id = cliente_id;
        venta.total = total;
        venta.detalle = detalle;
        const result = await venta.save();
        // Paso2: Crear la venta para MercadoPago
        let preference = {
            items: [
                {
                    title: "Tienda CodiGo",
                    unit_price: total,
                    currency_id: 'PEN',
                    quantity: 1
                },
            ],
            back_urls: {
                success: "http://localhost:3000/compra/confirmacion",
                failure: "http://localhost:3000/compra/confirmacion",
                pending: "http://localhost:3000/compra/confirmacion"
            },
            auto_return: "approved",
            external_reference: result._id.toString() // Envío el id de la venta creada
        };
        // Paso3: Enviar la venta a MercadoPago
        mercadopago.preferences.create(preference).then(function (response) {
            // Obtenemos la respuesta de MercadoPago
            console.log('MercadoPago response.body => ', response.body);
            res.json({url: response.body.init_point}); // Obtenemos la url del pago
        }).catch(function (error) {
            console.log('MercadoPago Error => ', error);
            res.sendStatus(500);
        });
    },
    async actualizar(req, res){
        const { idventa } = req.params;
        const { transaccion, estado } = req.body;
        try {
            const datos = {
                transaccion,
                estado
            };
            const result = await ventaModel.findByIdAndUpdate(idventa, datos);
            res.sendStatus(200);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
};

module.exports = controlador;
