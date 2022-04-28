import logo from "../img/logo.png"
import menu from "../img/menu.png"
import header from "./header.css"

export const Header = () =>{
  return (
    <header>
    <div className="container-logo">
    <img src="{logo}" alt="logo header"  className="header-logo"/>
    <img src="{menu}" alt="menu-hamburguesa" className="header-menu"/>
    </div>
    </header>
  )
}
