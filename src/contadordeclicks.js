import { useState } from "react"

const Contador = () => {
    const [contador, setContador] = useState(0);
    const [date, setDate] = useState(new Date().toLocaleString())
    const addOne = ()=>{
        setContador(contador + 1)
        setDate(new Date().toLocaleString())
    }
    return(
        <div>
            fecha ultimo click {date}
            cantidad de clicks {contador}
            <button onClick={addOne}>clickme</button>
        </div>
    )
}
export default Contador