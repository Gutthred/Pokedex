import React from "react";
import LOGO from "../../assets/logo-pokemon-79x45.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navBar">
        <figure className="navBar-img">
          <img src={LOGO} alt="Pokemon Logo" />
        </figure>

        <ul className="navBar-menu">
          <li className="navBar-item">
            <span>Home</span>
          </li>
          <li className="navBar-item">
            <span>Pokemon</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
