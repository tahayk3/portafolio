import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </button>
      <div className={`navbar ${isOpen ? "open" : ""}`}>
        <img src="/logo.png" alt="" />
        <Link to="home" smooth={true} duration={500}>
          Inicio
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Proyectos
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contacto
        </Link>
      </div>
    </>
  );
};

export default Navbar;
