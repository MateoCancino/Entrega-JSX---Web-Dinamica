import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import nikeLogo from '../assets/Logo_Nike.png';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Input from '../components/input';
import Button from '../components/button';

function Signin() {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');

    //useState para validar contraseñas
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Navegar con estado
         if(password !== confirmPassword){
            setError('Contraseñas invalidas - Intente nuevamente')
            return; //Detiene la ejecución en caso de contraseñas distintas
        }
        // Navegar con estado (nombre)
        setError(' ')//Resetea el setError
        navigate('/sent', { state: { nombre } });
    };

    return (
        <>
            <Navbar/>
            <form className="form" onSubmit={handleSubmit}>
                <img src={nikeLogo} alt="Nike" />
                <Input name="Nombre" type="text" id="Nombre" value={nombre} onChange={handleNombreChange} />
                <Input name="Correo Electrónico" type="email" id="email" />
                <Input name="Contraseña" type="password" id="passwd1" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Input name="Contraseña" type="password" id="passwd2" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)}/>
                {error && <p className='error--text'>{error}</p>}
                <Button type="submit" className="sing--button" title="Ingresar"/>
                </form>
            <Footer/>
        </>
        
    );
}

export default Signin;
