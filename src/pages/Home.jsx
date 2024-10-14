import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <svg className="svg-animation" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        {/* Ejemplo de una línea animada */}
        <line className="animated-line" x1="100" y1="100" x2="700" y2="100" />
        {/* Ejemplo de círculo animado */}
        <circle className="animated-circle" cx="400" cy="300" r="50" />
        {/* Otros elementos SVG pueden añadirse aquí */}
      </svg>
      <div className="content">
        <h1>¡Hola! Soy [Tu Nombre]</h1>
        <p>Desarrollador Web</p>
      </div>
    </div>
  );
};

export default Home;
