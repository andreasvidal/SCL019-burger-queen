import { useState, useContext } from "react";
import "./products.css"


export const Product = ({data}) =>{

  const [Product, changeProducts] = useState([]);

  const productsType = (option) => {
    // eslint-disable-next-line default-case
    switch (option) {
      case "Hambuger":
        const hamburger = data.filter((elem) => elem.type === option);
        changeProducts(hamburger);
        console.log(hamburger);
        break;
      default:
    }
  };

  return(
    <>
      <ul className="btn-container">
        <button className="btn-products" onClick={()=>productsType("Hambuger")}>HAMBURGUESAS</button>
        <button className="btn-products" onClick={()=>productsType("Hambuger")}>PARA TOMAR</button>
        <button className="btn-products" onClick={()=>productsType("Hambuger")}>ENSALADAS </button>
        <button className="btn-products" onClick={()=>productsType("Hambuger")}>POSTRES</button>
      </ul>
    </>
  )
}

