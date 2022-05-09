import { Routes, Route } from "react-router-dom";
import {Home} from "../src/components/Home";
import {WaitressHome} from "../src/components/waitress/Order"
import {DeliveredKitchen} from "../src/components/kitchen/DeliveredKitchen"


const App = () => {
  return (
      <Routes>
          <Route   path="/" element={<Home />} />
          <Route path="/waitress" element={<WaitressHome/>}/>
          <Route path="/kitchen" element={<DeliveredKitchen/>}/>
          <Route path="/Order" element={<WaitressHome/>}/>
          <Route path="*" element={
            <div>
              <h1>PAGINA NO ENCONTRADA ERROR 404</h1>
              <h2>La URL a la que ingresaste es incorrecta.</h2>
            </div>
          }/>
        </Routes>
  );
}

export default App;
