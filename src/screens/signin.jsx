import { useState } from 'react'
import nikeLogo from '../assets/Logo_Nike.png'

import Input from '../components/input';
import Button from '../components/button'

import { useNavigate } from 'react-router-dom';



function Signin(){
    const navigate = useNavigate();
    return(
    <>
        <form class="form">
            <img src={nikeLogo} alt="Nike"/>
            <Input name="Correo Electronico" type="email" id="email"/>
            <Input name="Contraseña" type="password" id="passwd"/>
            <Input name="Contraseña" type="password" id="passwd"/>
            <Button type="button" className="sing--button" to="/signin" title="Ingresar"/>
        </form>
    </>
    )
}
export default Signin