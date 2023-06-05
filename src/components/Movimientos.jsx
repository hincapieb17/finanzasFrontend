import React, { useState } from "react";
import DetalleMovimientos from './DetalleMovimientos';
import '../styles/Movimientos.css';

const Movimiento = () => {

    const [ocultoContainer, setOcultoContainer] = useState(true);

    const mostrarContainer = () => {
        setOcultoContainer(ocultoContainer ? false : true);
    };


    return (
        <div className="container-todo-movimiento">
            <div className="container-card" onClick={mostrarContainer}>

                <div className="container-fecha-numero">
                    <h2 className="fecha-dia-numero">02</h2>
                </div>

                <div className="container-dia-anio-mes">
                    <p className="fecha-dia">Viernes</p>
                    <p className="container-mes-anio">jun. 2023</p>
                </div>

                <div className="container-movimientos">
                    <h3 className="movimiento-ingreso">$ 100.000,00</h3>
                    <h3 className="movimiento-gasto">$ 300.000,00</h3>
                </div>
            </div>
            <div className={ocultoContainer ? 'container-oculto' : 'container-oculto-visible'}>
                <DetalleMovimientos />
                <DetalleMovimientos />
                <DetalleMovimientos />
            </div>
        </div>



    );
};

export default Movimiento;