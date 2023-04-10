import axios from 'axios';

const API_URL = 'https://dhodonto.ctdprojetos.com.br';

const getDentists = async () => {
    try {
        const response = await axios.get(`${API_URL}/dentista`);
        const data = response.data.map((dentist) => {
            return {
                ...dentist,
                id: dentist.matricula
            }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

const getPatients = async () => {
    try {
        const response = await axios.get(`${API_URL}/paciente`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth`, {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export {getDentists, getPatients, login};
