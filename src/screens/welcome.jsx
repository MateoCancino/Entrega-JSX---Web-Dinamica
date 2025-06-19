import { useNavigate } from 'react-router-dom';
import Button from '../components/button'


function Welcome(){

    const navigate = useNavigate();

    return(
        <>
            <h1>Nike Factory</h1>
            <Button type="button" class="startNow--button" to="/login" title="Comenzar"/>
        </>
    )

}
export default Welcome