import "./Footer.css";
import miFoto from "../assets/me.png";

//iconos
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={miFoto} alt="Mi Foto" className="footer-photo" />
        <p>¡Gracias por visitar mi página!</p>
        <div className="social-links">
          <a
            href="https://github.com/tahayk3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/cristian.tahay.9?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/tahayk3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/cristian-tahay-92aa481bb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
