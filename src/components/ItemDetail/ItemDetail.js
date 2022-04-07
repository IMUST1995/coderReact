import ButtonBuy from '../ButtonBuy/ButtonBuy'
import './ItemDetail.css'

const ItemDetail = ({ data }) =>{
    
    const {title, brand, price, stock, img, id} = data
    return(
        <div className='container'>
            <div className='imgContainer'>
                <img className='imgItemDetail' src={`../img/${img}`}></img>
            </div>
            <div className='infoContainer'>
                <h2 className='sentence'>{title}</h2>
                <h4 className='sentence'>{brand}</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
                <h3 className='sentence'>${price}</h3>
                <ButtonBuy/>
            </div>
        </div>
    )
}

export default ItemDetail