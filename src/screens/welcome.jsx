import { Link } from "react-router-dom"

function Welcome(){
    return(
        <>
            <h1>Nike Factory</h1>
            <Link to="/login" className="startNow--button">Empezar ahora</Link>
        </>
    )

}
export default Welcome