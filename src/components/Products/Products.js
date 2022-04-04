import {useState, useEffect} from 'react'
import Card from "../Card/Card";
import './Products.css'
import React from "react";

const Products = () =>{
const data = [{
    id: 1,
    title: 'Whey Protein',
    brand: 'Optimun Nutrition',
    price: 69.95,
    stock: 5,
    img: 'wheygold.jpg'
},{
    id: 2,
    title: 'Beta Alanine',
    brand: 'Nutricost',
    price: 30,
    stock: 10,
    img: 'beta.jpg'
},
{
    id: 3,
    title: 'Creatine Monohidrated',
    brand: 'Bulk Suplements',
    price: 50, 
    stock: 0,
    img: 'creatinaSignature.jpg'
},{
    id: 4,
    title: 'Isolate Protein',
    brand: 'Glanbia Performance Nutrition', 
    price: 80,
    stock: 2,
    img: 'isopure.jpg'
}
]
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
    <div className='products'>
        {products.map( (product) => {
            const { id } = product
            return(
                <Card data={product} key={id}/>
            )
        })}
    </div>
)
}
export default Products