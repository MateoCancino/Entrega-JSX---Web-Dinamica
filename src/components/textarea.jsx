function Textarea(props){
    return(
        <>
            <label htmlFor="text">{props.mensaje}
                <textarea name="text" id="text" rows={10}></textarea>
            </label>        
        </>
    );
    
}
export default Textarea;
