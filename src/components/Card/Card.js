import './Card.css'
import ButtonBuy from '../ButtonBuy/ButtonBuy'


const Card = ({ data }) =>{
    const {title, brand, price, stock, img, id} = data
    return(
            <div className='card' id={`${id}`}>
                <div className='divImg'>
                    <img className='img' src={`../img/${img}`}></img>
                </div>
                <h2 className='elementInCard'>{title}</h2>
                <h4 className='elementInCard'>{brand}</h4>
                <h3 className='elementInCard'>$ {price}</h3>
                <ButtonBuy stock={stock} initial={1}/>
            </div>
    )
}

export default Card