import {db} from "../../firebase"
import {onSnapshot, collection, doc, updateDoc, query, orderBy} from "firebase/firestore"
import { useEffect, useState} from "react";
import { FcOk } from "react-icons/fc";
import "./ProductKitchen.css"

export const ProductKitchen = () => {
  const [delivered, setDelivered] = useState ([]);
  const ordersCollectionRef = collection(db, "order");
  console.log(ordersCollectionRef)
  //Función para mostrar en pantalla los pedidos
  const updateOrder = async (id, status) => {
    const orderDoc = doc(db, "order", id);
    const newFields = { status: "Listo" };
    await updateDoc(orderDoc, newFields);
    console.log(newFields);
  };

  useEffect(() => {
    const q = query(ordersCollectionRef, orderBy("time", "desc"));
    const getOrders = onSnapshot(q, (snapshot) =>
    setDelivered(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    console.log(getOrders);
    return getOrders;
    // eslint-disable-next-line
  }, []);
  console.log(delivered);
  return(
    <main>
      <h1 className="title-ready">ENTREGADOS</h1>
      <div className="container-products">
        {delivered.length !== 0 &&
          delivered.map((item, id) => {
            return (
              <div className="container-ready" key={id}>
              <p className="sutitle">Mesera: {item.name}</p>
              <p className="sutitle">Mesa: {item.table}</p>
              <p className="sutitle txt-date">Fecha: {item.time}</p>
              {item.order.map((item) => {
                return (
                <ul>
                  {" "}
                  <li className="list-ready">
                    {item.count} {item.name}
                  </li>
                </ul>
                );
              })}
              <p className="sutitle">Estado: {item.status}</p>
              <button className="btn-ready" type="submit" onClick={() => {updateOrder(item.id, item.status)}}><FcOk className="icon-ready"/></button>
              </div>
            )
          })}
      </div>
    </main>
  )
}
