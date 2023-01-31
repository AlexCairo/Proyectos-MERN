import axios from 'axios';

const URL_API = 'http://localhost:3001/registro';

export async function listarRegistros(){
    const result = await axios.get(`${URL_API}/listar`);
    return result;
};

export async function guardarRegistro(datos){
    const result = await axios.post(`${URL_API}/guardar`, datos);
    return result;
};

export async function mostrarRegistro(id){
    const result = await axios.get(`${URL_API}/detalle/${id}`);
    return result;
};

export async function editarRegistro(datos){
    const result = await axios.put(`${URL_API}/editar/${datos._id}`, datos);
    return result;
};

export async function eliminarRegistro(id){
    const result = await axios.delete(`${URL_API}/eliminar/${id}`);
    return result;
};