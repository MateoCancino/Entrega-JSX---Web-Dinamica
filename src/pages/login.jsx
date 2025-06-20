import { useState } from 'react'
import nikeLogo from '../assets/Logo_Nike.png'

import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

import Input from '../components/input';
import Select from '../components/select';
import Button from '../components/button'




function Login(){
    const navigate = useNavigate();
    const [count, setCount] = useState(0)
    const select = ['Cliente','Becado','Entusiasta', 'Otros'];
    const [nombre, setNombre] = useState('');

    //useState para validar contraseñas
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    //Manipulación del input Name
    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    //Verifica la contraseña y me lleva a /sent
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            setError('Contraseñas invalidas - Intente nuevamente')
            return; //Detiene la ejecución en caso de contraseñas distintas
        }
        // Navegar con estado (nombre)
        setError(' ')//Resetea el setError
        navigate('/sent', { state: { nombre } });
    };

    //Navigate para llevarme a /signin
    const handleClick= () =>{
        navigate('/signin');
    }

    return(
    <>
        <form className="form" onSubmit={handleSubmit}>
            <img src={nikeLogo} alt="Nike"/>
            <div>
                <Input name="Nombre" type="text" id="Nombre" value={nombre} onChange={handleNombreChange} />
                <Input name="Apellido"/>
            </div>
            <Input name="Correo Electronico" type="email" id="email" />
            <Select name ="Motivo suscripción" options={select}/>
            <Input name="Contraseña" type="password" id="passwd1" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Input name="Contraseña" type="password" id="passwd2" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)}/>
            {error && <p className='error--text'>{error}</p>}
            <Button type="submit" className="submit" to="/sent" title="Ingresar"  onClick={handleSubmit}/>
            <div className="line"></div>
            <p>¿Ya tienes una cuenta?</p>
            <Button type="button" className="sing--button" title="Iniciar Sesión" onClick={handleClick}/>
        </form>
    </>
    )
}
export default Login