import { useState } from 'react'
import nikeLogo from '../assets/Logo_Nike.png'

import Input from '../components/input';
import Button from '../components/button'



function Signin(){
    return(
    <>
        <form class="form">
            <img src={nikeLogo} alt="Nike"/>
            <Input name="Correo Electronico" type="email" id="email"/>
            <Input name="Contraseña" type="password" id="passwd"/>
            <Button boton="Ingresar"/>
        </form>
    </>
    )
}
export default Signin