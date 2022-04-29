import "./header.css";
import { Nav } from "../nav/Nav";
import logo from "../../img/logo.png";

export const Header = () => {
  return (
    <header>
      <Nav>
        <div className="container-logo">
          <img src={logo} alt="logo header" className="header-logo" />
        </div>
      </Nav>
    </header>
  );
};
