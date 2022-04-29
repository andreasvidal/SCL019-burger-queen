import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {FiAlignJustify} from "react-icons/fi";
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
            INICIO
          </Link>
          <Link className="items" to="/takeORder" >
            TOMAR PEDIDOS
          </Link>
          <Link className="items" to="/orders" >
            PEDIDOS
          </Link>
          <Link className="items" to="/delivered" >
            ENTREGADOS
          </Link>
        </ul>
      )}
      <button onClick={toggleNav} className="btn"><FiAlignJustify></FiAlignJustify></button>
    </nav>
  );
};
