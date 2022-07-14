import { Routes, Route } from "react-router-dom";
import {Home} from "../src/components/Home";
import {WaitressHome} from "../src/components/waitress/Order"
import {DeliveredKitchen} from "../src/components/kitchen/DeliveredKitchen"
import {Ticket} from "../src/components/kitchen/Ticket"
import "./App.css"
import error404 from "../src/img/404.png"

const App = () => {
  return (
      <Routes>
          <Route   path="/" element={<Home />} />
          <Route path="/waitress" element={<WaitressHome/>}/>
          <Route path="/Order" element={<WaitressHome/>}/>
          <Route path="/kitchen" element={<DeliveredKitchen/>}/>
          <Route path="/Ticket" element={<Ticket/>}/>
          <Route path="*" element={
            <div>
            <h1>¡Ups dirección no encontrada!</h1>
              <img src={error404} />
            </div>
          }/>
        </Routes>
  );
}

export default App;
