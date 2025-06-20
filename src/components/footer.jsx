import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
        <ul className="footer--links">
          <li><Link to="/">Welcome</Link></li>
          <li><Link to="/signin">Ingresar</Link></li>
          <li><Link to="/login">Iniciar Sesión</Link></li>
        </ul>
        <p className="footer--description">Nike Factory — Proyecto entrega Programación Web Dinamica orientado para prácticas con React para el manejo de componentes, props, map, react-router-dom, navigate y demás</p> 
    </footer>
  );
}

export default Footer; 
