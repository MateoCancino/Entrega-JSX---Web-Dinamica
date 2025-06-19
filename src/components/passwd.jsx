function Passwd(props){
    return(
        <>
            <label htmlFor="input">{props.name}
                <input type="password" id="input" required/>
            </label>
        </>
    )
}
export default Passwd