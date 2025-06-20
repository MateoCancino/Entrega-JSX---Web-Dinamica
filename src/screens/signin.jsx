import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import nikeLogo from '../assets/Logo_Nike.png';

import Input from '../components/input';
import Button from '../components/button';

function Signin() {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    const handleIngresar = () => {
        // Navegar con estado
        navigate('/sent', { state: { nombre } });
    };

    return (
        <form className="form" onSubmit={(e) => e.preventDefault()}>
            <img src={nikeLogo} alt="Nike" />
            <Input name="Nombre" type="text" id="Nombre" value={nombre} onChange={handleNombreChange} />
            <Input name="Correo Electrónico" type="email" id="email" />
            <Input name="Contraseña" type="password" id="passwd" />
            <Input name="Confirmar Contraseña" type="password" id="passwdConfirm" />
            <Button type="button" className="sing--button" title="Ingresar" onClick={handleIngresar}/>
        </form>
    );
}

export default Signin;
