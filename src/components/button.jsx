function Button(props){
    return(
        <>
            <button type={props.type} className={props.class} onClick={() => navigate(props.to)} >{props.title}</button>
        </>
    )
}
export default Button;