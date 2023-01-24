import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

function Menu() {
  return (
    <>
      <ul className="nav d-flex justify-content-between shadow mb-4">
        <li className="nav-item fs-4">
          <NavLink className="nav-link" to="/" aria-current="page">
            Home
          </NavLink>
        </li>
        <li className="nav-item fs-4">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item fs-4">
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Menu;
