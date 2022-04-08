import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
import data from '../data'


const ItemDetailContainer = () => {
    
const [product, setProduct] = useState([])
        
const getProduct = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(data)
        }, 1000);
    })
}
useEffect ( () => {
    getProduct().then( (result) => {
        setProduct(result)
    })
}, [])

return(
    <>
    <div>
        {/* <ItemDetail data={product[0]}/> */}
        {product.map( (product) => {
            const { id } = product
            return(
                <ItemDetail data={product} key={id}/>
            )
        })}
    </div>
    </>
)
}
export default ItemDetailContainer