import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import "./updateTicket.css"
import { FcApproval } from "react-icons/fc";

export const UpdateTicket = ({id, time, table, name, status, total, order}) => {

  const [update, setupdate] = useState({
    status: {status: "Listo"}
  });

  const changeSatus =() => {
    console.log(changeSatus, "cambia?")
    setupdate({
      ...update,
      status: "Entregado"
    })
  }

  const updateStatus = async (e, id) => {
    e.preventDefault()
    const postEdit = doc(db, "order", id);
    await updateDoc(postEdit, {status: "Listo"
    })
  }

  return(
    <div className="container-update">
      <form action="" onSubmit={(e)=>updateStatus(e)}>
        <div className="update-context" key={id}>
          <p className="sutitle-update">Mesa :{table}</p>
          <p className="sutitle-update">Nombre :{name}</p>
          <p className="sutitle-update">Fecha: {time}</p>
          <span className="sutitle-update uptdate-items">
            Pedido:
            {order.map((item, id)=> {
            return(
            <ul>
            {" "}
              <li className="list-update" key={id}>{item.count}-{item.name}</li>
            </ul>
            );
          })}
          </span>
          <p className="sutitle">Total :{total}</p>
          <p>{status.status}</p>
          <button className="btn-ready" type="submit" onClick={(e) => changeSatus(e)}><FcApproval className="icon-ready"/></button>
        </div>
      </form>
    </div>
  )
}

