import { useNavigate } from "react-router-dom";

function Button(props){
    const navigate = useNavigate();
    return(
        <>
            <button type={props.type} className={props.className} onClick={() => navigate(props.to)} >{props.title}</button>
        </>
    )
}
export default Button;