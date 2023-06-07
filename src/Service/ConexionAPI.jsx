import axios from 'axios';

const ConexionAPI = {
    getCategoriaIngresos: () => {
        return axios.get('http://localhost:8080/categoriaIngreso');
    },
    getCategoriaGasto: () => {
        return axios.get('http://localhost:8080/categoriaGasto');
    },
}

export default ConexionAPI;