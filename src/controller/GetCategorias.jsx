import ConexionAPI from "../Service/ConexionAPI";

export const GetCategoriaIngreso = async () => {
    try{
        const response = await ConexionAPI.getCategoriaIngresos();
        const listCastegoriaIngreso = response.data;
        return listCastegoriaIngreso;
    }catch (error) {
        console.error(error);
    }
};

export const GetCategoriaGasto = async () => {
    try{
        const response = await ConexionAPI.getCategoriaGasto();
        const listCastegoriaGasto = response.data;
        return listCastegoriaGasto;
    }catch (error) {
        console.error(error);
    }
};