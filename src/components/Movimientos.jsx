import React, { useState, useEffect } from "react";
import DetalleMovimientos from './DetalleMovimientos';
import '../styles/Movimientos.css';
import { getDetalleMovimientos } from '../controller/MovimeintosController';

const Movimiento = ({ movimiento }) => {

    const [detalleMovimientos, setDetalleMovimientos] = useState([]);

    useEffect(() => {
        const obtenerListaMovimientos = async () => {
            try {
                const response = await getDetalleMovimientos(movimiento.fecha);
                setDetalleMovimientos(response);
            } catch (error) {
                console.error(error);
            }
        };
        obtenerListaMovimientos();
    }, []);

    const [ocultoContainer, setOcultoContainer] = useState(true);

    const mostrarContainer = () => {
        setOcultoContainer(ocultoContainer ? false : true);
    };

    var formattedGastos = "";
    var formattedIngresos = "";

    if (movimiento.gastos !== null) {
        formattedGastos = movimiento.gastos.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }

    if (movimiento.ingresos !== null) {
        formattedIngresos = movimiento.ingresos.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }


    return (
        <div className="container-todo-movimiento">
            <div className="container-card" onClick={mostrarContainer}>

                <div className="container-fecha-numero">
                    <h2 className="fecha-dia-numero">{movimiento.dia}</h2>
                </div>

                <div className="container-dia-anio-mes">
                    <p className="fecha-dia">{movimiento.diaSemana}</p>
                    <p className="container-mes-anio">{movimiento.mes + '. ' + movimiento.anio}</p>
                </div>

                <div className="container-movimientos">
                    <h3 className="movimiento-ingreso">$ {formattedIngresos}</h3>
                    <h3 className="movimiento-gasto">$ {movimiento.gastos != null ? formattedGastos : '00'}</h3>
                </div>
            </div>
            <div className={ocultoContainer ? 'container-oculto' : 'container-oculto-visible'}>

                {detalleMovimientos.map((detalle) => (
                    <DetalleMovimientos key={movimiento.fecha} detalle={detalle} />
                ))}
                
            </div>
        </div>



    );
};

export default Movimiento;