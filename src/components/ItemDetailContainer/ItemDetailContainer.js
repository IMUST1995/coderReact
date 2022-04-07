import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"

/* const BotonAnadirAlCarroCompra = document.querySelectorAll('.botonCarrito');
//accedemos al boton comprar
const botonComprar = document.querySelector('#botonComprar')
botonComprar.addEventListener('click', comprar);
//con for each iteramos en cada uno la incoprporacion del evento click llamando a la funcion anadircarritoclicked
BotonAnadirAlCarroCompra.forEach((anadirCarro)=>{
    anadirCarro.addEventListener('click', anadirCarroClicked)
})
//declarando la funcion anadir carritclicked
function anadirCarroClicked(event){
    //capturamos el evento
    const button = event.target;
    //buscamos la case .card mas cercana al boton del evento en este caso card pertenece al contendor div de la carta del producto
    const producto = button.closest('.card');
    //seleccionamos el elemento de interes con las siguientes lineas de codigo
    const productoNombre = producto.querySelector('h3').innerText;
    const productoPrecio = producto.querySelector('span').innerText;
    const productoImagen = producto.querySelector('img').src;
    //llamamos otra funcion con parametros las constantes declaradas anteriormente 
    anadirAlCarroCompras(productoNombre, productoPrecio, productoImagen);
    console.log(productoNombre)
    console.log(productoPrecio)
    console.log(productoImagen)
}
//contenerdor donde inyectaremos el template del carrito
const carritoItemsContainer = document.querySelector("#carritoItemsContainer");


function anadirAlCarroCompras(productoNombre, productoPrecio, productoImagen){
    let titulosCards = document.getElementsByClassName('nombreItem')
    for(let i = 0; i < titulosCards.length; i++){
        if(titulosCards[i].innerText == productoNombre){
            let itemRepetido = titulosCards[i].parentElement.parentElement.parentElement.querySelector('.cantidadItems');
            //evitamos que se puedan comprar mas de 10 articulos
            if(itemRepetido.value < 10){
                itemRepetido.value++
                totalCarroComprafunction()
            return
            }
            else{
                totalCarroComprafunction()
                return
            }
            
        }
    }
    
    const carritoItemFila = document.createElement('div');
    const carritoTemplate = `
    <div class="container-fluid row d-flex justify-content-around text-center align-items-center itemCompraCarrito">
        <div class="container-fluid col-2 mb-1" style="width: 15%;">
            <img class="img-fluid m-1 imgCarrito" src="${productoImagen}" alt="producto">
        </div>
        <div class="container d-flex align-items-center justify-content-around col-sm col-2">
            <p class='nombreItem'>${productoNombre}</p>
        </div>
        <div class="container-fluid col-2 row d-flex flex-row">
            <p class="d-flex flex-row">$<span class="precioProducto">${productoPrecio}</span></p>
        </div>
        <div class="container-fluid d-flex align-items-center justify-content-center col-sm col-2">
                <input class="input-group-text cantidadItems" type="number" value="1" min="1" max="10">
        </div>
        <div class="d-flex justify-content-center col-sm col-2">
            <input class="btn bg-danger text-white botonEliminar" type="button" value="X">
        </div>
        <hr>
    </div>
    `

  carritoItemFila.innerHTML = carritoTemplate;
  carritoItemsContainer.appendChild(carritoItemFila) */

const ItemDetailContainer = () => {
    /* function getId(e){
        console.log(e.target)
        console.log('asdasd')
    }
    const allCards = document.querySelectorAll('.Card');
    allCards.forEach((card) => {
        card.addEventListener('click', getId);
    }) */
    
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
    <h1 className='title'> Product Detail </h1>
    <div>
        <ItemDetail data={product[0]}/>
        {/* {product.map( (product) => {
            const { id } = product
            return(
                <ItemDetail data={product} key={id}/>
            )
        })} */}
    </div>
    </>
)
}
export default ItemDetailContainer