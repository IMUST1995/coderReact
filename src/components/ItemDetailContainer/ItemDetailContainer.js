import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    
const dataproduct = [{
    id: 1,
    title: "Beta Alanine", 
    brand: "Bulk Suplements", 
    price: 27.97, 
    img: "beta.jpg"
    }/*,
     {
    id: 2,
    title:"Whey Bodybuilding Signature", 
    brand: "Blend Protein", 
    price: 69.99, 
    img: "bodybuilding.signature.jpg"
    },
    {
    id: 3,
    title: "Monohidrated Creatine", 
    brand: "Bulk Suplements", 
    price:"30", 
    img: "creatine.jpg"
    }, 
    {
    id: 4,
    title: "Melatonina", 
    brand: "Evolution Nutrition", 
    price: 16.99, 
    img: "melatonina.jpg"
    }, 
    {
    id: 5,
    title:"Gold Standard", 
    brand: "Optimun Nutrition", 
    price: 59.99, 
    img: "wheygold.jpg"
    }, 
    {
    id: 6,
    title: "Whey protein", 
    brand: "Isopure", 
    price: 49.99, 
    img: "isopure.jpg"
    },
    {
    id: 7,
    title: "Whey Hidrolizada", 
    brand: "Optimun Nutrition", 
    price: 79.99, 
    img: "hidrowheyON.jpg"
    },
    {
    id: 8,
    title: "Cafeina", 
    brand: "Nutricost", 
    price: 15, 
    img: "cafeina.jpg"
    },
    {
    id: 9,
    title: "Creatina Monohidratada", 
    brand: "Bodybuilding Signature", 
    price: 29.99, 
    img: "creatinaSignature.jpg"
    },
    {
    id: 10,
    title: "Caseina Elite", 
    brand: "Dynamatize", 
    price: 39.99, 
    img: "eliteCasein.jpg"
    }; */]
/* 
    const [showCard, setShowCard] = useState(); */
    /* const [products, setProducts] = useState([]); */
const [product, setProduct] = useState([])
        
const getProduct = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(dataproduct)
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