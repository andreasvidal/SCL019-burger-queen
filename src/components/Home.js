import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import home from "./home.css"


export const Home = () => {
  return (
    <main>
      <img src="{logo}" alt="logo principal" />
      <div className="container">
        <h1 className="title-home">SPACEGRILL</h1>
        <p className="title-home-b">Burger</p>
      </div>
      <div className="container-links">
      <Link className="links" to="/kitchen">COCINA</Link>
      <Link className="links" to="/waitress">MESEROS</Link>
      </div>
    </main>
  );
};
