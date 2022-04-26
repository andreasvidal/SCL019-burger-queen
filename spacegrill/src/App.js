import { Routes, Route } from "react-router-dom";
import {Home} from "../src/components/Home.js"

const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
  );
}

export default App;
