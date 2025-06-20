import { useLocation } from 'react-router-dom';

function Sent(){
    const location = useLocation();
    const { nombre } = location.state || { nombre: 'Usuario'}
    console.log(nombre);

    return(
        <>
            <h2 className='h2--sent'>Bienvenido {nombre} </h2>
            <p className='p--sent'>Bienvenido a la familia Nike. ¡Ya fuiste dado de alta!
                En los proximos dias nos estaremos comunicando via email
            </p>
        </>
    )


}
export default Sent;