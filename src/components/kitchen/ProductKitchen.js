import { db } from "../../firebase";
import { collection, onSnapshot, orderBy, query} from "../../firebase";
import { useEffect, useState } from "react";
import {Update} from "../kitchen/Update"

export const ProductKitchen =() =>{
  const [delivery, changeDelivery] = useState([]);

  /*useEffect(() => {
    const q = query(collection(db, "order"), orderBy("time", "desc"));
    onSnapshot(q, (snapshot) => {
      //console.log('se ejecuto snapshot')
      // console.log(snapshot.docs[0].data());
      const array = snapshot.docs.map((document) => {
        return { ...document.data(), id: document.id }

      })
      changeDelivery(array);
    },
      (error) => {
        console.log(error);
      }
    );
  }, []);*/
   //conectamos a la API
  // al poner [] el useEffect se ejecuta solamente al primer renderizado
  //arreglo de dependencias[], puede ser muy util para hacer coneccion a una Api
  // nos conectamos a la base de datos cuando la pagina cargue por primera vez
const oldState = [...delivery]
//dentro del filtro ejecutamos un callback
const newState = oldState.filter((elem)=>{return elem.stated.stated === "Pendiente"})

useEffect(()=>{
  return (()=> {
    console.log('Cerramos coneccion con la API')
  });
}, []);

return(
  newState.length > 0 &&
  <div>
    {newState.map((order, index)=> (
      <Update key={index}
         id={order.id}
          time={order.time}
          table={order.table}
          name={order.name}
          state={order.state}
          total={order.total}
          order={order.order}/>
    ))}
  </div>
)
}

