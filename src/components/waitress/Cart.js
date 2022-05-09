import { useContext, useState } from "react";
import { db} from "../../firebase"
import { collection, addDoc } from "../../firebase";
import { MenuContext } from "./Order";
import { FiPlusCircle, FiMinusCircle, FiTrash2 } from "react-icons/fi";
import "./cart.css"

export const Cart =()=>{
  const context = useContext(MenuContext);
  const cartProduct = context.state.cart;

  const totalCart = cartProduct.reduce((total, product) =>
  (total = total + product.price  * product.count), 0); //total= acumulador toma el valor de 0 la primera vez
                                                        //product= al elemento que iteraremos

  const totalCount = context.state.cart.reduce((total, product)=>
  (total = total + product.count), 0)

  const getDate = () => {
    const today = new Date();
    const date = `${today.getDate()} - ${(today.getMonth() + 1)} - ${today.getFullYear()}`;
    const hour = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    const dateAndHour = `Fecha: ${date} - Hora: ${hour}`;
    return dateAndHour;
  };

  const [client, changeClient] = useState("");
  const [table, changeTable ] = useState("");

  const addData = async (e)=>{
  e.prevenDefault();
  console.log("funcionando addData");
  try {
    const docRef = await addDoc(collection(db, "menu"), {
      name: client,
      table: table,
      time: getDate(),
      order: cartProduct,
      state: { estado: 'Preparación' },
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  changeClient("");
  changeTable("");
  context.removeAll();
  }

  return(
    <>
    <aside className="container-aside">
      <form onSubmit={(e) => addData(e)} className="form-count">
        <div className="bg-none">
          <label className="label-count">Mesera:</label>
          <input
            type="text"
            name="client"
            value={client}
            onChange={(e) => changeClient(e.target.value)}
          />
          <label className="label-count">Mesa:</label>
          <input
            type="number"
            name="table"
            value={table}
            onChange={(e) => changeTable(e.target.value)}
            min="1" max="6"
            placeholder="1-6"
          />
          <h3 className="label-count">Resumen:</h3>
          <div className="container-resum">
            {cartProduct.map((item, index)=>(
              <div key={index}>
              <span className="total-count">
                <p className="label-count">{item.count} {item.name}</p>
                <p className="label-count">${(item.price * item.count)}</p>
                <button onClick={(e) => context.increase(item.id, e)} className="btn-resum"><FiPlusCircle className="icons resum"></FiPlusCircle></button>
                <button onClick={(e) => context.removeProduct(item.id, e)} className="btn-resum"><FiTrash2 className="icons resum"></FiTrash2></button>
                <button onClick={(e) => context.decrease(item.id, e)} className="btn-resum"><FiMinusCircle className="icons resum"></FiMinusCircle></button>
                </span>
                <hr />
              </div>
            ))}
          </div>
          <span className="container-span">
            <p className="label-count position-count">Cantidad: {totalCount}</p>
            <h1 className="label-count position-count">Total: ${totalCart}</h1>
            <button type="submit" className="btn-center">Enviar</button>
            <p>Enviado a cocina</p>
          </span>
        </div>
      </form>
      </aside>
    </>
  )

};
