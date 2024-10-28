import "./Home.css";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import HappyFace from "../components/HappyFace/HappyFace";
import {Scene3D} from './Scene3D';

const Home = () => {
  const el = useRef(null); // Elemento donde se mostrará el texto
  const typed = useRef(null); // Instancia de Typed.js

  useEffect(() => {
    const options = {
      strings: [
        "Bienvenido",
        "¡Gracias por visitar!",
        "Bienvenida",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    // Inicializa Typed.js en el elemento
    typed.current = new Typed(el.current, options);

    // Destruye la instancia al desmontar el componente
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
   <section id="home">
     <div className="main">
      <div className="text-container">
        <h2>Hola, soy Cristian</h2>
        <span ref={el} />
        <HappyFace/>
        <p>Soy ingeniero en sistemas y full stack developer</p>
      </div>
      <div className="model-container">
      <Scene3D/>
      </div>
    </div>
   </section>
  );
};

export default Home;
