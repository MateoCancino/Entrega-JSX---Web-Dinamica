import nikeLogo from '../assets/Logo_Nike.png'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <>
        <nav className='Navbar'>
        <img src={nikeLogo} alt="logo" />
           <ul className='Navbar--links'>
                <li><Link to="/signin">Ingresar</Link></li>
                <li><Link to="/login">Iniciar Sesión</Link></li>
           </ul>
        </nav> 
        </>
    )
    
}
export default Navbar;