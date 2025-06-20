import { useNavigate } from 'react-router-dom';
import Button from '../components/button'
import Navbar from '../components/navbar'
import Footer from '../components/footer';


function Welcome(){

    const navigate = useNavigate();
    const handleClick= () =>{
        navigate('/login');
    }
    return(
        <>
            <Navbar/>
            <h1>Nike Factory</h1>
            <Button type="button" className="startNow--button"  onClick={handleClick} title="Comenzar"/>
            <Footer/>
        </>
    )

}
export default Welcome