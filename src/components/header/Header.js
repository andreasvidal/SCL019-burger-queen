import  "./header.css"
import {Nav }from "../nav/Nav"
import logo from "../../img/logo-mobil.png"

export const Header = () =>{
  return (
    <header>
    <Nav></Nav>
    <div className="container-logo">
    <img src={logo} alt="logo header" className="header-logo"/>
    </div>
    </header>
  )
}
