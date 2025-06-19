

function Input(props){
    return(
        <>
            <label htmlFor="input">{props.name}
                <input type="text" id="input" required/>
            </label>
        </>
    )
}
export default Input