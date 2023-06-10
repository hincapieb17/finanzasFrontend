import React, { useState, useEffect } from "react";
import '../styles/Transaccion.css';
import { format, getYear } from 'date-fns';
import IconoIngreso from '../img/arrow.png';
import IconoGasto from '../img/down.png';
import IconoBalance from '../img/down-arrow.png';
import Periodo from "../img/calendar.png";
import Movimientos from './Movimientos';
import Modal from 'react-modal';
import AgregarTransaccion from "./AgregarTransaccion";
import { getMovimientos, getCuentaById } from '../controller/MovimeintosController';


const Transaccion = () => {
  const [movimientos, setMovimientos] = useState([]);
  const [cuenta, setCuenta] = useState();
  const [modalIngresoGasto, setModalIngresoGasto] = useState(false);
  const [ingresoGasto, setIngresoGasto] = useState(true);

  const obtenerMovimientosYCuenta = async () => {
    try {
      const movimientosResponse = await getMovimientos();
      setMovimientos(movimientosResponse);

      const cuentaResponse = await getCuentaById(1);
      setCuenta(cuentaResponse);
    } catch (error) {
      console.error(error);
    }
  };

  const abrirModalIngreso = () => {
    setIngresoGasto(true)
    setModalIngresoGasto(true);
  };

  const abrirModalGasto = () => {
    setIngresoGasto(false)
    setModalIngresoGasto(true);
  };

  useEffect(() => {
    Modal.setAppElement('#root');
    obtenerMovimientosYCuenta();
  }, []);

  useEffect(() => {
    if (!modalIngresoGasto) {
      obtenerMovimientosYCuenta();
    }
  }, [modalIngresoGasto]);

  const cuentaTotal = () => {
    if (cuenta && cuenta.monto) {
      const formatted = cuenta.monto.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return formatted;
    }
    return "0.00";
  };

  const ingresosTotal = () => {
    var total = 0;
    movimientos.forEach((movimiento) => {
      total += movimiento.ingresos;
    });

    const formattedIngresos = total.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formattedIngresos;
  };

  const gastosTotal = () => {
    var total = 0;
    movimientos.forEach((movimiento) => {
      total += movimiento.gastos;
    });

    const formattedGastos = total.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formattedGastos;
  };

  const Balance = () => {
    var totalGasto = 0;
    var totalIngreso = 0;
    movimientos.forEach((movimiento) => {
      totalGasto += movimiento.gastos;
    });

    movimientos.forEach((movimiento) => {
      totalIngreso += movimiento.ingresos;
    });

    const totalBalance = totalIngreso - totalGasto;

    const formatted = totalBalance.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formatted;
  };

  const date = new Date();
  const month = format(date, 'MMMM');
  const year = getYear(date);

  return (
    <div className="container-transacciones">
      <Modal isOpen={modalIngresoGasto} className="modal-ingreso">
        <AgregarTransaccion setModalIngresoGasto={setModalIngresoGasto} ingresoGasto={ingresoGasto} />
      </Modal>

      <div className="container-saldo-total">
        <p className="saldo">Saldo total</p>
        <h2 className="total">$ {cuentaTotal()}</h2>
      </div>

      <div className="container-resumen">
        <div className="container-ingreso">
          <img src={IconoIngreso} alt="icono" className="icon-img-home" />
          <label>Ingreso</label>
          <h4>$ {ingresosTotal()}</h4>
        </div>
        <div className="container-gasto">
          <img src={IconoGasto} alt="icono" className="icon-img-home" />
          <label>Gasto</label>
          <h4>$ {gastosTotal()}</h4>
        </div>
        <div className="container-balance">
          <img src={IconoBalance} alt="icono" className="icon-img-home balance" />
          <label>Balance</label>
          <h4>$ {Balance()}</h4>
        </div>
        <div className="container-perido">
          <img src={Periodo} alt="icono" className="icon-img-home" />
          <label>Fecha actual</label>
          <h4>{month + '. ' + year}</h4>
        </div>
      </div>
      <div className="container-bonotes">
        <button className="boton-ingreso" onClick={abrirModalIngreso}>
          <img src={IconoIngreso} alt="icono" className="icon-img-botones" />
          Ingreso
        </button>
        <button className="boton-gasto" onClick={abrirModalGasto}>
          <img src={IconoGasto} alt="icono" className="icon-img-botones" />
          Gasto
        </button>
      </div>

      <div className="container-movimientos-op">
        {movimientos.map((movimiento) => (
          <Movimientos key={movimiento.fecha} movimiento={movimiento} />
        ))}
      </div>
    </div>
  );
};

export default Transaccion;
