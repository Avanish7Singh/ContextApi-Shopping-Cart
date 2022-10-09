import React from 'react'
import { CartContext } from '../context/Context'
import Filter from './Filter';
import SinglePage from './SinglePage';
import "./style.css"

const Home = () => {
 const { state:{products}, productState:{byStock, byRating, byFastDelivery, querySearch, sort}} = CartContext();
//  console.log(products)

const transform = () => {
  let transformProduct = products;

  if(sort){
    transformProduct = transformProduct.sort((a,b) => 
    sort === "LowToHigh"? a.price - b.price : b.price - a.price
    )
    
  }

  if(!byStock){
   transformProduct= transformProduct.filter((prod) => prod.inStock)
  }

  if(byFastDelivery){
    transformProduct= transformProduct.filter((prod) => prod.fastDelivery)
   }

   if(byRating){
    transformProduct = transformProduct.filter((prod) => 
    prod.rating >= byRating
    )
   }

   if(querySearch){
    transformProduct = transformProduct.filter((prod) =>
    prod.name.toLowerCase().includes(querySearch)
    )
   }
  return transformProduct;
}

  return (
    <div className='home'>
      <Filter />
      <div className="homeContainer">
        {
          transform().map((prod) =>{
            return <SinglePage prod={prod} key={prod.id}/>
          })
        }
      </div>
    </div>
  )
}

export default Home