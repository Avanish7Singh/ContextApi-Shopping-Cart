import React, { useContext, useReducer } from 'react'
import { createContext} from 'react';
import faker from "faker"
import { cartReducer, productReducer } from './Reducer';

const Cart = createContext()

const Context = ({ children}) => {

    const Products = [ ...Array(20)].map(() =>({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0,3,5,6,9]),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.random.arrayElement([1,2,3,4,5])
    }))
    // console.log(Products)
    
    const [state, dispatch] = useReducer(cartReducer, {
        products:Products,
        cart:[],
    })

    const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    querySearch: "",
    byRating: 0,
    })

  return (
    <Cart.Provider value={{state, dispatch, productState, productDispatch}}>
      {children}
    </Cart.Provider>
  )
}

export default Context;

export const CartContext = () =>{
   return useContext(Cart)
}