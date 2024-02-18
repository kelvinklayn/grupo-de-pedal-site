import React from 'react';
import NavigationButton from '../components/NavigationButton';
import backgroundImage from '../assets/img_home.jpg';
import logoRota from '../assets/Rota-pantaneira.png';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="appContainer">
      <div className="navbarcontainer">
        <div className="pageImage">
          <img src={logoRota} alt="img-rota">
          </img>
        </div>
        <div className='pageTitle'>
          <h1>Rota Pantaneira</h1>
        </div>
        <div className="navButtons">
          <NavigationButton to="/sobre">Sobre</NavigationButton>
          <NavigationButton to="/galeria">Galeria</NavigationButton>
        </div>
      </div>
      <div className="homeContent">
        <h1>AVENTURA SOBRE DUAS RODAS</h1>
        <img className="imageHome" src={backgroundImage} alt="Imagem de Fundo">
        </img>
      </div>
      <Footer />
    </div>
  );
}

export default Home;