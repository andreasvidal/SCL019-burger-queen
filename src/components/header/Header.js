import logo from "../img/logo.png"
import menu from "../img/menu.png"
import header from "./header.css"
import {Nav }from "../nav/Nav"

export const Header = () =>{
  return (
    <header>
    <div className="container-logo">
    <img src="{logo}" alt="logo header"  className="header-logo"/>
    <Nav></Nav>
    </div>
    </header>
  )
}
