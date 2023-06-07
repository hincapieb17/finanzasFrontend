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
        const getListCategoriaIngreso = async () => {
            try {
                const respuesta = await GetCategoriaIngreso();
                setListCategoriaIngreso(respuesta);
            } catch (error) {
                console.error(error);
            }
        };
        getListCategoriaIngreso();
    }, []);

    useEffect(() => {
        const getListCategoriaGasto = async () => {
            try {
                const respuesta = await GetCategoriaGasto();
                setListCategoriaGasto(respuesta);
            } catch (error) {
                console.error(error);
            }
        };
        getListCategoriaGasto();
    }, []);


    return (
        <div className="container-agregar-transaccion">
            <h2 className={ingresoGasto ? 'h2-ingreso' : 'h2-gasto'}>{ingresoGasto ? 'Agregar Ingreso' : 'Agregar gasto'}</h2>
            <label className="monto-label">Monto:</label>
            <input type="number" className="monto-input" />
            <label className="categoria-label">Categoria</label>
            <select className="categoria-section">
                {(ingresoGasto ?listCategoriaIngreso : listCategoriaGasto ).map((lista) => (
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