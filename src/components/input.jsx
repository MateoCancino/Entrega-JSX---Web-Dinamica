function Input(props){
    return(
        <>
            <label htmlFor={props.id}>{props.name}
                <input type={props.type} id={props.id} required/>
            </label>
        </>
    )
}
export default Input