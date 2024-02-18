import React from 'react';
import NavigationButton from '../components/NavigationButton';
import logoRota from '../assets/Rota-pantaneira.png';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


function Sobre() {
  return (
    <div>
      <div className="navbarcontainer">
        <div className="pageImage">
          <Link to="/">
            <img src={logoRota} alt="img-rota">
            </img>
          </Link>
        </div>
        <div className='pageTitle'>
          <h1>Rota Pantaneira</h1>
        </div>
        <div className="navButtons">
          <NavigationButton to="/">Inicio</NavigationButton>
          <NavigationButton to="/galeria">Galeria</NavigationButton>
        </div>
      </div>
      <div className='aboutContent'>
        <h1>Sobre o Grupo de Pedal</h1>
        <p>Nossa História</p>
      </div>
      <Footer />
    </div>
  );
}

export default Sobre;