import React, { useState, useEffect } from "react";
import { format } from 'date-fns'
import '../styles/AgregarTransaccion.css'
import { postIngreso, postGasto } from '../controller/MovimeintosController';

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
            { id: 4, nombre: "Regalo" }
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

    const [monto, setMonto] = useState();
    const [categoria, setCategoria] = useState();
    const [detalle, setDetalle] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedDate = format(new Date(), 'yyyy-MM-dd');
        var idCategoria = null;

        if (ingresoGasto) {
            idCategoria = listCategoriaIngreso.find(
                (categoriaItem) => categoriaItem.nombre === categoria
            );
        } else {
            idCategoria = listCategoriaGasto.find(
                (categoriaItem) => categoriaItem.nombre === categoria
            );
        }

        try {
            const transaccion = {
                [ingresoGasto ? "categoriaIngreso" : "categoriaGasto"]: {
                    id: idCategoria.id,
                    nombre: categoria
                },
                fecha: formattedDate,
                monto: monto,
                descripcion: detalle
            };
            console.log(transaccion);


            if(ingresoGasto){
                postIngreso(1, transaccion);
            }else{
                postGasto(1, transaccion);
            }

            cerrarModal();
        } catch (error) {
            console.error(error);
            // Manejar el error de alguna forma
        }
    };




    return (
        <div className="container-agregar-transaccion">
            <h2 className={ingresoGasto ? 'h2-ingreso' : 'h2-gasto'}>{ingresoGasto ? 'Agregar Ingreso' : 'Agregar gasto'}</h2>
            <label className="monto-label">Monto:</label>
            <input type="number" className="monto-input"
                placeholder="Monto"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
                required />

            <label className="categoria-label">Categoria</label>
            <select className="categoria-section"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                required>
                    <option>Seleccione</option>
                {(ingresoGasto ? listCategoriaIngreso : listCategoriaGasto).map((lista) => (
                    <option>{lista.nombre}</option>
                ))}

            </select>
            <label className="detalle-label" >Detalle</label>
            <input type="text" className="detalle-input"
                placeholder="Detalle"
                value={detalle}
                onChange={(e) => setDetalle(e.target.value)}
                required />
            <button onClick={handleSubmit} className="guardar-button">Guardar</button>
            <button onClick={cerrarModal} className="cerrar-button">Cerrar</button>
        </div>

    );
};

export default AgregarTransaccion;