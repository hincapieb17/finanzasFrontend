import axios from 'axios';

const ConexionAPI = {
    getMovimientos: () => {
        return axios.get('http://localhost:8080/cuentas/movimientos');
    },
    getDetalleMovimeintos: (fechaEnviar) => {
        return axios.get(`http://localhost:8080/cuentas/detalleMovimientos/${fechaEnviar}`)
    },
    getCuentaById: (idCuenta) => {
        return axios.get(`http://localhost:8080/cuentas/${idCuenta}`);
    },
    postIngreso : (idCuenta, ingreso) => {
        return axios.post(`http://localhost:8080/ingresos/create/${idCuenta}`, ingreso)
    }, postGasto: (idCuenta, gasto) => {
        return axios.post (`http://localhost:8080/gastos/create/${idCuenta}`, gasto)
    }
    
}

export default ConexionAPI;