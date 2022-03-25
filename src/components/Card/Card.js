import './Card.css'
import ButtonBuy from '../ButtonBuy/ButtonBuy'

const data = {
    
}
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
    const {name, brand, price} = data
    return(
            <div className='card'>
                <h2 className='elementInCard'>{name}</h2>
                <h4 className='elementInCard'>{brand}</h4>
                <h3 className='elementInCard'>$ {price}</h3>
                <ButtonBuy/>
            </div>
    )
}

export default Card