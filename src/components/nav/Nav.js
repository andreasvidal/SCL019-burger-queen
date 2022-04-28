import React, {useState, useEffect} from 'react'
import { Link } from 'react-desktop/macOs';
import nav from "./nav.css";

export const Nav =()=>{
const [toggleMenu, setToggleMenu] = useState(false)
const [screenWidth, setScreenWidth] = useState(window.innerWidth)


const toggleNav = () => {
  setToggleMenu(!toggleMenu)
}

useEffect(() => {

  const changeWidth = () => {
    setScreenWidth(window.innerWidth);
  }

  window.addEventListener('resize', changeWidth)

  return () => {
      window.removeEventListener('resize', changeWidth)
  }

}, [])

return (
  <nav>
    {(toggleMenu || screenWidth > 500) && (
    <ul className="list">
    <Link to="/home" className="items">INICIO</Link>
    <Link to="/takeORder" className="items">TOMAR PEDIDOS</Link>
    <Link to="/orders"  className="items">PEDIDOS</Link>
    <Link to="/delivered" className="items">ENTREGADOS</Link>
  </ul>
    )}

    <button onClick={toggleNav} className="btn"></button>
  </nav>
)
};
