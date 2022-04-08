import {useState, useEffect} from 'react'
import Card from "../Card/Card";
import './Products.css'
import React from "react";
import data from '../data'

const Products = () =>{

/* 
    const [showCard, setShowCard] = useState(); */
    /* const [products, setProducts] = useState([]); */
const [products, setProducts] = useState([])
       
const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(data)
        }, 2000);
    })
}
useEffect ( () => {
    getProducts().then( (x) => {
        setProducts(x)
    })
}, [])

return(
    <>
    <h1 className='title'> Tienda </h1>
    <div className='products'>
        {products.map( (product) => {
            const { id } = product
            return(
                <Card data={product} key={id} />
            )
        })}
    </div>
    </>
)
}
export default Products