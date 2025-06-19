import { useState } from "react"

function Select(props){
    const [motivos, setMotivos] = useState(props.options)
    return(
        <>
            <label htmlFor="select">{props.name}
                <select required name="name" id="name">
                    {motivos.map((motivo, index) => (
                        <option key={index} value={motivo}>
                            {motivo}
                        </option>
                    ))}
                </select>
            </label>
        </>
    )
}
export default Select