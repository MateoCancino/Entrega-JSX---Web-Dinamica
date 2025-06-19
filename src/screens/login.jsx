import { useState } from 'react'
import nikeLogo from '../assets/Logo_Nike.png'

import { Link } from "react-router-dom"

import Input from '../components/input';
import Select from '../components/select';
import Correo from '../components/correo';
import Button from '../components/button'
import Passwd from '../components/passwd';



function Login(){
    const [count, setCount] = useState(0)
    const select = ['Cliente','Becado','Entusiasta', 'Otros'];
    return(
    <>
        <form class="form">
            <img src={nikeLogo} alt="Nike"/>
            <div>
                <Input name="Nombre"/>
                <Input name="Apellido"/>
            </div>
            <Correo name="Correo"/>
            <Select name ="Motivo suscripción" options={select}/>
            <Passwd name="Contraseña"/>
            <Passwd name="Verifique su contraseña"/>
            <Button boton="Enviar solicitud"/>
            <div class="line"></div>
            <p>¿Ya tienes una cuenta?</p>
            <Link className="sing--button" to="/signin">Iniciar Sesión </Link>
        </form>
    </>
    )
}
export default Login