import ConexionAPI from "../Service/ConexionAPI";

export const getMovimientos = async () => {
    try{
        const response = await ConexionAPI.getMovimientos();
        const listMovimientos = response.data;
        return listMovimientos;
    }catch(error){
        console.error(error);
    }
};

export const getDetalleMovimientos = async (fechaEnviar) => {
    try{
        const response = await ConexionAPI.getDetalleMovimeintos(fechaEnviar);
        const listDetalleMovimientos = response.data;
        return listDetalleMovimientos;
    }catch(error){
        console.error(error);
    }
};

export const getCuentaById = async (idCuenta) => {
    try{
        const response = await ConexionAPI.getCuentaById(idCuenta);
        const cuenta = response.data;
        return cuenta;
    }catch(error){
        console.error(error);
    }

};

export const postIngreso = async (idCuenta, ingresocuenta) => {
    try{
        const response = await ConexionAPI.postIngreso(idCuenta, ingresocuenta);
        const ingreso = response.data;
        return ingreso;
    }catch(error){
        console.error(error);
    }

};

export const postGasto = async (idCuenta, gastocuenta) => {
    try{
        const response = await ConexionAPI.postGasto(idCuenta, gastocuenta);
        const ingreso = response.data;
        return ingreso;
    }catch(error){
        console.error(error);
    }

};