function Input(props){
    return(
        <>
            <label htmlFor={props.id}>{props.name}
                <input type={props.type} id={props.id} value={props.value} onChange={props.onChange} required/>
            </label>
        </>
    )
}
export default Input