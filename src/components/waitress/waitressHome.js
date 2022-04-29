import {Header} from "../header/Header"
import "./waitress.css"

export const WaitressHome = () =>{
  return (
    <main>
  <Header></Header>
    <div className="container-title">
      <h1 className="title">AGREGAR PEDIDOS</h1>
      <label for="order-time" className="label-time">Order Time</label>
      <input id="order-time" type="datetime-local" name="order-time" value="2017-06-01T08:30" className="input-label"></input>
    </div>
    <form action=""  method="post" className="form-container">
      <div className="form-section">
        <label for="waitress" className="label-form">MESERO</label>
        <input type="text" name="name" id="name" required placeholder="" />
      </div>
      <div className="form-section">
        <label for="waitress" className="label-form">N° MESA</label>
        <input type="text" name="name" id="name" required placeholder="" />
      </div>
    </form>
    {/*productos*/}
    <button ></button>
  </main>
  )
}


