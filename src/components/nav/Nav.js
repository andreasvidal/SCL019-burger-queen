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
      {(toggleMenu || screenWidth > 768) && (
        <ul className="list">
          <Link className="items" to="/" >
          <FiHome className="icon-menu"></FiHome> INICIO
          </Link>
          <Link className="items" to="/order" >
          <FiClipboard className="icon-menu"></FiClipboard>  TOMAR PEDIDOS
          </Link>
          <Link className="items" to="/orders" >
          <FiClock className="icon-menu"></FiClock>  PEDIDOS
          </Link>
          <Link className="items" to="/delivered" >
          <FiCheckSquare className="icon-menu"></FiCheckSquare>  ENTREGADOS
          </Link>
        </ul>
      )}
      <button onClick={toggleNav} className="btn"><FiMenu className="icono"></FiMenu></button>
    </nav>
  );
};
