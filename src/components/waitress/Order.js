import { useState, createContext } from "react";
import { Header } from "../header/Header"
import { Product } from "./Products"
import dataJson from "../../data.json"
import "./order.css"
import { Cart } from "./Cart";

export const MenuContext = createContext();
console.log(MenuContext)

export const WaitressHome = () => {
  const data = dataJson.menu;
  console.table(data)
  const [state, setState] = useState({
    menuList: data,
    cart: []
  });
  console.log(state.cart);

  //producto a agregar
  const addProduct = (product) => {
    console.log(addProduct);
    //el nuevo estado sera un carrito con productos
    return setState({
      ...state,
      //revisar que el carrito no tenga ya el producto que queremos agregar
      cart: state.cart.find((cartProduct) => cartProduct.id === product.id)
        ? state.cart.map((cartProduct) => cartProduct.id === product.id //comprobar si el producto que tenemos en el carrito es igual
                                                                         //a un producto nuevo que queremos agregar
          ? { ...cartProduct, count: cartProduct.count + 1 } : cartProduct)
        : [...state.cart, { ...product, count: 1 }] // se ejecuta en caso de agregar un producto que no est en el carrito
                                                    // inyectar un nuevo elemento al arreglo sera un objeto
    });
  };

  const removeProduct = (id) => {
    console.log(removeProduct);
    setState({
      ...state,
      cart: state.cart.filter((cartProduct)=> cartProduct.id !== id)
    });
  };

  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartProduct) =>
      cartProduct.id === id
          ? { ...cartProduct, count: cartProduct.count + 1 }
          : cartProduct
      )
    });
  };

  const removeAll = () => {
    setState({
      ...state,
      cart: []
    })
  }

  const decrease = (id) => {
    setState({
    ...state,
    cart: state.cart.map((cartProduct)=> cartProduct.id === id
    ? {...cartProduct, count: cartProduct.count > 1 ? -1 : 1}
    : cartProduct
     )
   })
  }

  const sum = { state,addProduct, increase, removeProduct, decrease, removeAll }
  return (
    <MenuContext.Provider value={sum}>
      <main >
        <Header></Header>
        <h1 className="container-title">AGREGAR PRODUCTOS</h1>
        <Product data={data} />
      </main>
      <Cart/>
    </MenuContext.Provider>
  )
}
