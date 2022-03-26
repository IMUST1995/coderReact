import './Card.css'
import ButtonBuy from '../ButtonBuy/ButtonBuy'

/* const style = {
    card: {
        display: 'flex',
        margin: '1rem',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 150,
    }
} */
const Card = (data) =>{
    const {name, brand, price, stock} = data
    return(
            <div className='card'>
                <h2 className='elementInCard'>{name}</h2>
                <h4 className='elementInCard'>{brand}</h4>
                <h3 className='elementInCard'>$ {price}</h3>
                <ButtonBuy stock={stock} initial={1}/>
            </div>
    )
}

export default Card