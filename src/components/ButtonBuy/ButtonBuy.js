import './ButtonBuy.css'
import { useState } from "react";
import './ButtonBuy.css'


const ButtonBuy = (props) => {
    /* const {stock, initial} = props
    const [contador, setContador] = useState(initial)
    const incrementar = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }
    const disminuir = () => {
        if(contador > 0){
            setContador(contador -1)
        }
    } */
    //'renderizamos' los botones con su respectiva funcion  
    return(
        <>
            <button className='buttonBuy'>I want it!</button>
            {/* <button className='button' onClick={disminuir}>-</button>
            <p>{contador}</p>
            <button className='button' onClick={incrementar}>+</button> */}
        </>
    )
}
export default ButtonBuy