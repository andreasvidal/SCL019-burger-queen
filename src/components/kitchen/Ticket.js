import { db } from "../../firebase";
import { collection, onSnapshot, orderBy, query} from "../../firebase";
import { useEffect, useState } from "react";
import { ProductKitchen } from "./ProductKitchen";

export const Ticket = ()=>{
  const [ticket, setTickets] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "order"), orderBy('time', 'desc'));
    onSnapshot(q, (snapshot) => {
      //console.log('se ejecuto snapshot')
      // console.log(snapshot.docs[0].data());
      const array = snapshot.docs.map((document) => {
        return { ...document.data(), id: document.id }

      })
      setTickets(array);
    },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const oldTicket = [...ticket]
  //dentro del filtro ejecutamos un callback
  const newTicket = oldTicket.filter((elem)=> {return elem.stated.stated === "Pedido listo "})
  useEffect(()=>{
    return (()=>{
      console.log('Cerramos coneccion con la API')
    });
  }, []);

  return(
    newState.length > 0 &&
    <div>
      {newTicket.map((order, index)=> (
        <ProductKitchen key={index}
          id={order.id}
          time={order.time}
          table={order.table}
          name={order.name}
          state={order.state}
          total={order.total}
          order={order.order}
        />
      ))}
    </div>
  )
}
