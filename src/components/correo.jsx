function Correo(props){
    return(
        <>
            <label htmlFor="input">{props.name}
                <input type="email" id="input" required/>
            </label>
        </>
    )
}
export default Correo