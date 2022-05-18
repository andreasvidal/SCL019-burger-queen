
import  { useState, useContext } from "react";
import {MenuContext} from "./Order"
import { FiArrowUpCircle } from "react-icons/fi";
import "./products.css";

/* ({}) = desestructuración seria igual que poner props.nombre */
export const Product = ({data}) => {
  const context = useContext(MenuContext);
  const [product, setProduct] = useState([]);

  const productType = (options) =>{
    // eslint-disable-next-line default-case
    switch (options){

      case "Hamburger":
        const hamb = data.filter((elem)=> elem.type === options );
        setProduct(hamb);
        break;
          case "Dessert":
          const dessert = data.filter((elem)=> elem.type === options );
          setProduct(dessert);
          break;
          case "Drinks":
            const drinks = data.filter((elem)=> elem.type === options);
            setProduct(drinks);
            break;
          case "Salads":
          const Salads = data.filter((elem)=> elem.type === options );
          setProduct(Salads);
          break;
    }
  }

  return(
    <>
      <section className="container-product">
        <ul className="container-btn">
          <button onClick={()=> productType("Hamburger")} className="btn-products">Hamburger</button>
          <button onClick={()=> productType("Drinks")} className="btn-products">Bebidas</button>
          <button onClick={()=> productType("Dessert")} className="btn-products">Postres</button>
          <button onClick={()=> productType("Salads")} className="btn-products">Ensaladas</button>
        </ul>
      </section>
      <section className="container-items">
        {product.map((item, index)=>(
          <article key={index} className="items-menu">
            <img src={item.img} alt="" className="center"/>
            <hr />
            <p className="title-items">{item.name} </p>
            <br />
            <h2 className="title-items p-items" >${item.price}</h2>
            <button onClick={() => context.addProduct(item)} className="btn-add"><FiArrowUpCircle className="icons"></FiArrowUpCircle></button>
          </article>
        ))}
      </section>
    </>
  )
};
