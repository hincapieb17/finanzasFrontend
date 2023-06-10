import React from "react";
import '../styles/DetalleMovimientos.css'

const DetalleMovimientos = ({ detalle }) => {

    var formattedMonto = "";

    formattedMonto = detalle.monto.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });


    return (
        <div className="Container-detalle-movimiento">
            <div className="container-categoria">
                <div className={detalle.tipo === "Ingreso" ? "container-img-detalle" : "container-img-detalle gasto"}>
                    <img src={require(`../img/categorias/${detalle.categoria}.png`)} alt="icono" className="img-detalle-movimiento" />
                </div>
                <label className="categoria">{detalle.categoria}</label>
            </div>
            <div className="container-monto">
            <h4 className={detalle.tipo === "Ingreso" ? "h4-verde": "h4-rojo"}>$ {formattedMonto}</h4>
            </div>
        </div>
    );
}

export default DetalleMovimientos;