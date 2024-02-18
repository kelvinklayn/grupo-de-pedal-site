import React from 'react';
import NavigationButton from '../components/NavigationButton';
import logoRota from '../assets/Rota-pantaneira.png';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import { Link } from 'react-router-dom';

// Importa todas as imagens da pasta 'asset

function Galeria() {
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
          <NavigationButton to="/Sobre">Sobre</NavigationButton>
        </div>
      </div>
      <div className="gallerycontent">
        <h1>Galeria do Grupo de Pedal</h1>
      </div>
      <Gallery />
      <Footer />
    </div>
  );
}

export default Galeria;