import ButtonBuy from '../ButtonBuy/ButtonBuy'
import './ItemDetail.css'
import { useParams } from "react-router-dom";
import Products from '../Products/Products';
import { useEffect, useState } from 'react';
import data from '../data';

const ItemDetail = () =>{
    //1. llamamos al hook
    const { id } = useParams()
    // 4. llamamos a usState para guardar elestado con lainfo del producto obtenido.
    const [product, setProduct] = useState({})
    //3. guardamos la funcion en un useEffecct qu e pasara el mock como parametro y el id como filtro
    useEffect(() => {
        getProductById(data, id)
    }, [id])
    //2. declaramos la funcion que filtrará por id
    const getProductById = (array, id) => {
        return array.map( (product) => {
            if(product.id == id){
                return setProduct(product)
            }
        })
    }
    return(
        <>
        <div className='container'>
            <div className='imgContainer'>
                <img className='imgItemDetail' src={`../img/${product.img}`}></img>
            </div>
            <div className='infoContainer'>
                <h2 className='sentence'>{product.title}</h2>
                <h4 className='sentence'>{product.brand}</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
                <h3 className='sentence'>${product.price}</h3>
                <ButtonBuy/>
            </div>
        </div>
        </>
    )
}

export default ItemDetail