import { Link } from "react-router-dom";
import {Nav }from "../nav/Nav"
import logo from "../../img/logo-mobil.png"
import  "./header.css"

export const Header = () =>{
  return (
    <header>
    <Nav></Nav>
    <div className="container-logo">
    <Link  to="/"><img src={logo} alt="logo header" className="header-logo"/></Link>
    </div>
    </header>
  )
}
