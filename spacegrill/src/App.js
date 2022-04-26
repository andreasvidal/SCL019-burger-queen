import {Home} from "../src/components/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
   <>
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
