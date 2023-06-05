import './App.css';
import React, { useState } from 'react';
import flecha from './img/arrow.png';
import Rutas from './components/Rutas';
import { Link } from 'react-router-dom'

function App() {

  const [titulo, setTitulo] = useState(true);

  const cambiarTituloInfo = () => {
    setTitulo(false);
  }

  const cambiarTituloTrans = () =>{
    setTitulo(true);
  }

  return (
    <div className="App">
      <div className="container-navbar">
        <h1 className='titulo-app'>{titulo ? 'Transacciones': 'Informes'}</h1>
        <nav className='nav-app'>
          <ul className='ul-app'>
          <li><Link to="/transacciones" onClick={cambiarTituloTrans}>Transacciones</Link></li>
          <li><Link to="/informes"  onClick={cambiarTituloInfo}>Informes</Link></li>
          </ul>
        </nav>
      </div>
      <div className='container-rutas'>
        <Rutas></Rutas>
      </div>

      <img src={flecha} alt="icono" className="icon-img-home" />   
    </div>
  );
}

export default App;
