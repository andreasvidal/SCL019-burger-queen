import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {FiMenu, FiHome, FiClipboard, FiClock, FiCheckSquare} from "react-icons/fi";
import "./nav.css";

export const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <Link className="items" to="/home" >
           <FiHome></FiHome> INICIO
          </Link>
          <Link className="items" to="/takeORder" >
          <FiClipboard></FiClipboard>  TOMAR PEDIDOS
          </Link>
          <Link className="items" to="/orders" >
          <FiClock></FiClock>  PEDIDOS
          </Link>
          <Link className="items" to="/delivered" >
          <FiCheckSquare></FiCheckSquare>  ENTREGADOS
          </Link>
        </ul>
      )}
      <button onClick={toggleNav} className="btn"><FiMenu className="icono"></FiMenu></button>
    </nav>
  );
};
