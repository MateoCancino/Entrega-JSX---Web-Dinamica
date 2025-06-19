import { useState } from 'react'
import nikeLogo from '../assets/Logo_Nike.png'

import Input from '../components/input';
import Select from '../components/select';
import Textarea from '../components/textarea';
import Correo from '../components/correo';
import Button from '../components/button'
import Passwd from '../components/input';



function Signin(){
    const [count, setCount] = useState(0)
    const select = ['Cliente','Becado','Entusiasta', 'Otros'];
    return(
    <>
        <form class="form">
            <img src={nikeLogo} alt="Nike"/>
            <Correo name="Correo"/>
            <Passwd name="Contraseña"/>
            <Button boton="Ingresar"/>
        </form>
    </>
    )
}
export default Signin