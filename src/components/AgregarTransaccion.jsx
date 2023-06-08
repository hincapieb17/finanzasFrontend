import React, { useState, useEffect } from "react";
import '../styles/AgregarTransaccion.css'
import { GetCategoriaIngreso, GetCategoriaGasto } from "../controller/GetCategorias";

const AgregarTransaccion = ({ setModalIngresoGasto, ingresoGasto }) => {

    const cerrarModal = () => {
        setModalIngresoGasto(false);
    }

    const [listCategoriaIngreso, setListCategoriaIngreso] = useState([]);
    const [listCategoriaGasto, setListCategoriaGasto] = useState([]);

    useEffect(() => {
        const nuevasCategoriasIngreso = [
            { id: 1, nombre: "Salario" },
            { id: 2, nombre: "Inversion" },
            { id: 3, nombre: "Renta" },
            { id: 4, nombre: "Salario" }
        ];

        setListCategoriaIngreso(nuevasCategoriasIngreso);
    }, []);

    useEffect(() => {
        const nuevasCategoriasGasto = [
            { id: 1, nombre: "Alimento" },
            { id: 2, nombre: "Factura" },
            { id: 3, nombre: "Transporte" },
            { id: 4, nombre: "Compra" },
            { id: 5, nombre: "Regalo" },
            { id: 6, nombre: "Educacion" },
            { id: 7, nombre: "Renta" },
            { id: 8, nombre: "Viaje" },
        ];
        setListCategoriaGasto(nuevasCategoriasGasto);
    }, []);


    return (
        <div className="container-agregar-transaccion">
            <h2 className={ingresoGasto ? 'h2-ingreso' : 'h2-gasto'}>{ingresoGasto ? 'Agregar Ingreso' : 'Agregar gasto'}</h2>
            <label className="monto-label">Monto:</label>
            <input type="number" className="monto-input" />
            <label className="categoria-label">Categoria</label>
            <select className="categoria-section">
                {(ingresoGasto ? listCategoriaIngreso : listCategoriaGasto).map((lista) => (
                    <option>{lista.nombre}</option>
                ))}

            </select>
            <label className="detalle-label">Detalle</label>
            <input type="text" className="detalle-input" />
            <button onClick={cerrarModal} className="guardar-button">Guardar</button>
            <button onClick={cerrarModal} className="cerrar-button">Cerrar</button>
        </div>

    );
};

export default AgregarTransaccion;