import { useState } from "react";
import {db} from "../../firebase"
import {doc, updateDoc} from "../../firebase";
export const Update = ({id, time, state, name, table, order, total}) => {

const [preparation, setPreparation] = useState({state: {state: "Pendiente"}
});

const changeStatus = () => {
  setPreparation({
    ...preparation,
    state: "Listo",
  })
}

const UpdateState = async (e) => {
  e.preventDefault();
        console.log('actualizando');

        try {
            await updateDoc(doc(db, "menu", id), {
                estado: preparation,
            });

        } catch (error) {
            console.log(error);
        }
    }
    return(
      <form action="" onSubmit={UpdateState}>
        <div key={id}>
        <p>{time}</p>
        <p>nombre {name}</p>
        <p>Mesa: {table}</p>
        <span>Pedido: {order.map((item, index)=> <li key={index}>{item.count}-{item.name}</li>)}</span>
        <p>{state.state}</p>
        <button type="submit" onClick={changeStatus}>Listo</button>
        </div>
      </form>
    )
  }
