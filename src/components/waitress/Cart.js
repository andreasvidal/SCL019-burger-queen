import { useContext, useState } from "react";
import { MenuContext } from "./Order";
import { FiPlusCircle, FiMinusCircle, FiTrash2 } from "react-icons/fi"
import {  addDoc, collection } from "firebase/firestore";
import { db } from '../../firebase';
import "./cart.css"

export const Cart =()=>{

  const context = useContext(MenuContext);
  const cartProduct = context.state.cart;

  const totalCart = cartProduct.reduce((total, product) =>
  (total = total + product.price  * product.count), 0); //total= acumulador toma el valor de 0 la primera vez
                                                        //product= al elemento que iteraremos    // item.count es la cantidad de cosas
  const totalCount = context.state.cart.reduce((total, product)=>
  (total = total + product.count), 0)



  const [client, changeClient] = useState("");
  const [table, changeTable ] = useState("");

  const getDate = () => {
    const today = new Date();
    const date = `${today.getDate()} - ${(today.getMonth() + 1)} - ${today.getFullYear()}`;
    const hour = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    const dateYAndHour = `${date} ${hour}`;
    return dateYAndHour ;
};

//guarda toda la info del pedido en firebase wiiiii
 const addData = async (e)=> {
   e.preventDefault();
    try{
      const docRef = await addDoc(collection(db, "order"),{
        name: client || null,
        table: table || null,
        order: cartProduct || null,
        total: totalCart || null,
        time: getDate(),
        status:"pendiente"
      });
      console.log("Document written with ID: ", docRef.id);
    }catch(e){
      console.error("Error adding document: ", e);
    }
    changeClient("");
    changeTable("");
    context.removeAll()
}
const hidden = () => {
  alert("Pedido enviado!")
}
/*const hidden = ()=>{
  let hnone= document.getElementById("hidden")
  if (hnone.style.display === "none") {
    hnone.style.display = "block"
  }else{
    hnone.style.display = "none"}
}*/


  return(
    <>
    <aside className="container-aside">
      <form className="form-count" onSubmit={(e) => addData(e)}>
        <div className="bg-none">
          <label className="label-count">Mesera:</label>
          <input
            type="text"
            name="client"
            value={client}
            onChange={(e) => changeClient(e.target.value)}
              required/>
          <label className="label-count">Mesa:</label>
          <input
            type="number"
            name="table"
            value={table}
            onChange={(e) => changeTable(e.target.value)}
            min="1" max="6"
            placeholder="1-6"
          required/>
          <h3 className="label-count">Resumen:</h3>
          <div className="container-resum">
            {cartProduct.map((item, index)=>(
              <div key={index}>
              <span className="total-count">
                <p className="label-count">{item.count} {item.name}</p>
                <p className="label-count">${(item.price * item.count)}</p>
                <button onClick={(e) => context.increase(item.id, e)} className="btn-resum"><FiPlusCircle className="icons resum"/></button>
                <button onClick={(e) => context.removeProduct(item.id, e)} className="btn-resum"><FiTrash2 className="icons resum bg-icon"/></button>
                <button onClick={(e) => context.decrease(item.id, e)} className="btn-resum"><FiMinusCircle className="icons resum"/></button>
                </span>
                <hr />
              </div>
            ))}
          </div>
          <span className="container-span">
            <p className="label-count position-count">Cantidad: {totalCount}</p>
            <h1 className="label-count position-count">Total: ${totalCart}</h1>
            <button type="submit" className="btn-center" onClick={(e)=>(hidden(e))}>Enviar</button>
            {/*<p id="hidden" onClick={(e)=>(hidden(e))}>Enviado a cocina</p>*/}
          </span>
        </div>
      </form>
      </aside>
    </>
  )

};
