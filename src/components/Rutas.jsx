import React from "react";
import { Routes, Route } from 'react-router-dom';
import Informe from './Informe';
import Transaccion from './Transaccion';

const Rutas = () => {

    return (
      <Routes>
      <Route 
        path='/'
        element={
          <Transaccion/>
        }
      />
      <Route 
        path='/transacciones'
        element={
          <Transaccion/>
        }
      />
      <Route 
        path='/informes'
        element={
          <Informe/>
        }
      />
    </Routes>
    );
};

export default Rutas;