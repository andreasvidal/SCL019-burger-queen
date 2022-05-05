import { useState, createContext } from "react";
import {Header} from "../header/Header"
import { Product } from "./Products"
import dataJson from "../../data.json"

export const MenuContext = createContext();

export const WaitressHome = ()=>{
const data = dataJson.menu;
console.table(data)
const [state, setState]= useState ({
  menuList: data,
  cart: []
});
console.log(state.cart);

const increase = (id) => {
  setState({
    ...state,
    cart: state.cart.map((cartItem) =>
      cartItem.id === id
        ? { ...cartItem, count: cartItem.count + 1 }
        : cartItem
    )
  });
};
const sum ={state, increase }
return(
  <main value={sum}>
    <Header></Header>
    <h1 className="container-title">AGREGAR PRODUCTOS</h1>
    <Product data={data}/>
  </main>
)


}
