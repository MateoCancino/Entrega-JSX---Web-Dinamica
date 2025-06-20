import { useNavigate } from 'react-router-dom';
import Button from '../components/button'


function Welcome(){

    const navigate = useNavigate();
    const handleClick= () =>{
        navigate('/login');
    }
    return(
        <>
            <h1>Nike Factory</h1>
            <Button type="button" className="startNow--button"  onClick={handleClick} title="Comenzar"/>
        </>
    )

}
export default Welcome