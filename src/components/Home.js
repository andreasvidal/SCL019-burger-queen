import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export const Home = () => {
  return (
    <main>
      <img alt="logo principal">
        {logo}
      </img>
      <div className="container">
        <h1 className="title-home">SPACEGRILL</h1>
        <p>Burger</p>
      </div>
      <Link to="/kitchen">cocina</Link>
      <Link to="/waitress">mesera</Link>
    </main>
  );
};
