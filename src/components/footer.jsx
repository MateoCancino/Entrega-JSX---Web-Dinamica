import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer--links">
        <Link to="/">Welcome</Link>
        <Link to="/signin">Ingresar</Link>
        <Link to="/login">Iniciar Sesión</Link>
      </div>
      <div className="footer-description">
        <p>Nike Factory — Proyecto entrega Programación Web Dinamica orientado para prácticas con React para el manejo de componentes, props, map, react-router-dom, navigate y demás</p>
      </div>
    </footer>
  );
}

export default Footer; 
