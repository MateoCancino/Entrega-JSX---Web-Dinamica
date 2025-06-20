import { useNavigate } from "react-router-dom";

function Button(props){
    const navigate = useNavigate();

    const handleClick = () =>{
        if(props.onClick) {
            props.onClick();
        }
        else if (props. to){
            navigate(props.to)
        }
    }
    return(
        <>
            <button type={props.type} className={props.className} onClick = {handleClick}>{props.title}</button>
        </>
    )
}
export default Button;