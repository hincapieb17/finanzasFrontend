import React, { useState } from "react";
import imagenSrc from '../img/categorias/Regalo.png';
import '../styles/DetalleMovimientos.css'

const DetalleMovimientos = ({ nombreImagen }) => {
    //const imagenSrc = require(`../img/categorias/${nombreImagen}`).default;

    return (
        <div className="Container-detalle-movimiento">
            <div className="container-categoria">
                <div className="container-img-detalle">
                    <img src={imagenSrc} alt="icono" className="img-detalle-movimiento" />
                </div>
                <label >Regalo</label>
            </div>

            <h4>3.000.000,00</h4>
        </div>
    );
}

export default DetalleMovimientos;