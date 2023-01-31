import { Api } from "../helpers/Api";

export const listarVentasPorClienteService = async (idcliente) => {
    const result = await Api().get(`ventas/cliente/${idcliente}`);
    return result;
}

export const mercadopagoVentaService = async (datos) => {
    const result = await Api().post(`ventas/mercadopago`, datos);
    return result;
}

export const actualizarVentaService = async (datos) => {
    const result = await Api().put(`ventas/actualizar/${datos.id}`, datos);
    return result;
}