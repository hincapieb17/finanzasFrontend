import React from "react";
import '../styles/Transaccion.css'
import { format, getYear } from 'date-fns';
import IconoIngreso from '../img/arrow.png';
import IconoGasto from '../img/down.png';
import IconoBalance from '../img/down-arrow.png';
import Periodo from "../img/calendar.png"
import Movimientos from './Movimientos';

const Transaccion = () => {

    const date = new Date();
    const month = format(date, 'MMMM'); 
    const year = getYear(date);

    return (
        <div className="container-transacciones">
            <div className="container-saldo-total">
                <p className="saldo">Saldo total</p>
                <h2 className="total">$ 2.000.000,00</h2>
            </div>

            <div className="container-resumen">
                <div className="container-ingreso">
                    <img src={IconoIngreso} alt="icono" className="icon-img-home" />
                    <label>Ingreso</label>
                    <h4>$ 100.000,00</h4>
                </div>
                <div className="container-gasto">
                    <img src={IconoGasto} alt="icono" className="icon-img-home" />
                    <label>Gasto</label>
                    <h4>$ 100.000,00</h4>
                </div>
                <div className="container-balance">
                    <img src={IconoBalance} alt="icono" className="icon-img-home balance" />
                    <label>Balance</label>
                    <h4>$ 100.000,00</h4>
                </div>
                <div className="container-perido">
                    <img src={Periodo} alt="icono" className="icon-img-home" />
                    <label>Perido</label>
                    <h4>{month +'. '+ year}</h4>
                </div>
            </div>
            <div className="container-bonotes">
                <button className="boton-ingreso">
                    <img src={IconoIngreso} alt="icono" className="icon-img-botones" />
                    Ingreso
                </button>
                <button className="boton-gasto">
                    <img src={IconoGasto} alt="icono" className="icon-img-botones" />
                    Gasto
                </button>
            </div>

            <div className="container-movimientos-op">
                <Movimientos/>
                <Movimientos/>
                <Movimientos/>
                <Movimientos/>
                <Movimientos/>
                <Movimientos/>
                <Movimientos/>
            </div>
        </div>
    );
};

export default Transaccion;
