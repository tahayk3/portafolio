import "./Navbar.css";
import {Link} from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav className="navbar">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="projects">Proyectos</Link></li>
                <li><Link to="contact">Contacto</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;