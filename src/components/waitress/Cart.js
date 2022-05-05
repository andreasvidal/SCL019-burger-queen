import { useContext, useState } from "react";
import { db} from "../../firebase"
import { collection, addDoc } from "firebase/firestore";
import { MenuContext } from "./Order";

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
      <form action="" onSubmit={(e) => addData(e)}>
        <div>
          <label>Cliente:</label>
        </div>
      </form>
    </>
  )

};
