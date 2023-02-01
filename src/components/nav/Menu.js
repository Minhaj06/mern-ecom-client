import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

function Menu() {
  // hooks
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <>
      <ul className="nav d-flex justify-content-between shadow mb-4">
        <li className="nav-item fs-4">
          <NavLink className="nav-link" to="/" aria-current="page">
            Home
          </NavLink>
        </li>

        {!auth?.user ? (
          <>
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
          </>
        ) : (
          <li className="nav-item fs-4">
            <a onClick={logout} className="nav-link">
              Logout
            </a>
          </li>
        )}
      </ul>
    </>
  );
}

export default Menu;
