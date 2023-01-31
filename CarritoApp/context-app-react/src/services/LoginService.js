import axios from 'axios';

const API_URL = 'http://localhost:3001/auth';

export const loginService = async (datos) => {
    const result = await axios.post(`${API_URL}/login`, datos);
    return result;
};