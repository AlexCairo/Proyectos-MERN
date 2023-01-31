import axios from 'axios';

const URL_API = 'http://localhost:3001/heroes';

export async function listarHeroes(){
    const result = await axios.get(`${URL_API}/listar`);
    return result;
};

export async function guardarHeroe(datos){
    const result = await axios.post(`${URL_API}/crear`, datos);
    return result;
};

export async function mostrarHeroe(id){
    const result = await axios.get(`${URL_API}/mostrar/${id}`);
    return result;
};

export async function editarHeroe(datos){
    const result = await axios.put(`${URL_API}/editar/${datos._id}`, datos);
    return result;
};

export async function eliminarHeroe(id){
    const result = await axios.delete(`${URL_API}/eliminar/${id}`);
    return result;
};