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
                <h3 className='sentence'>${price}</h3>
            </div>
        </div>
    )
}

export default ItemDetail