import { db } from "../../firebase";
import { updateDoc, doc } from "firebase/firestore";
import { useState } from "react";


export const Update = ({id, time, table, name, status, total, order}) =>{

const [state, setState] = useState({
  status: {status: "Pendiente"}
});

  const changeStatus = () =>{
    console.log(changeStatus)
    setState({
      ...state,
      status: "Listo"
  })
}
  const updateStatus = async (e) =>{
    e.preventDefault();
    console.log("se actualiza?")

    try {
      await updateDoc(doc(db, "order", id),{
        status: status
      });
    }catch(error){
      console.log(error);
    }
  }

  return(
    <main>
      <form action="" onChange={updateStatus}>
        <div key={id}>
          <p>Hora: {time}</p>
          <p>Mesa: {table}</p>
          <p>Nomre: {name}</p>
          <span>Pedido: {order.map((item, index)=>
          <ul>
            <li key={index}>{item.count}-{item.name}</li>
          </ul>)}</span>
          <p>Total :{total}</p>
          <p>{status.status}</p>
          <button type="submit" onClick={changeStatus}>Listo</button>
        </div>
      </form>
    </main>
  )
}

