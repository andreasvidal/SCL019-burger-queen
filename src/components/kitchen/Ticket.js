import { db } from "../../firebase";
import { collection, onSnapshot,  } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Header } from "../header/Header";
import { UpdateTicket } from "./UpdateTicket";


export const Ticket =()=>{

  const [ticket, setTicket] = useState([]);
  //funcion para mostar los pedidos en pantalla
  useEffect(() => {
    onSnapshot(collection(db, "order"),(snapshot) => {
      const  arrayProduct = snapshot.docs.map((element) => {
        return  {
          ...element.data(), id: element.id
        };
      })
      setTicket(arrayProduct)
      console.log(setTicket(arrayProduct))
    },(error)=>{
      console.log(error)
    })
  }, []);

  const oldStatus = [...ticket]
  console.log(oldStatus)
    //dentro del filtro ejecutamos un callback
    const newStatus = oldStatus.filter((element)=>{return element.status === "Listo"})
    console.log(newStatus)
    useEffect(()=>{
      return(()=>{
        console.log('Cerramos coneccion con la API')
      });
    }, []);

    return(
      <main>
      <div>
      <Header/>
        {newStatus.map((item, id)=>(
          <UpdateTicket
          key= {id}
          id={item.id}
          time={item.time}
          table={item.table}
          status={item.status}
          total={item.total}
          order={item.order}
          />
        ))}
      </div>
      </main>
    )
}
