import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../../images/logo.svg";

import { Drawer } from "antd";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

import {
  HeartOutlined,
  ShoppingCartOutlined,
  BellOutlined,
  BarsOutlined,
} from "@ant-design/icons";

import { Input } from "antd";
const { Search } = Input;

const onSearch = (value) => console.log(value);

function Header() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="header py-2" id="header">
        <div className="container">
          {/* Topbar */}
          <div className="topbar row g-0 pt-2 pt-lg-0 gy-lg-3 justify-content-between align-items-center pt-lg-3 pb-4 w-100">
            {/* Logo */}
            <div className="col-4 col-lg-3 col-xl-4">
              <NavLink className="d-inline-block" to="/">
                <img src={logo} alt="" className="logo" />
              </NavLink>
            </div>

            {/* Search Box */}
            <div className="d-none d-lg-block col-lg-4 col-xl-4 search-box position-relative fs-3 overflow-hidden">
              <Search size="large" placeholder="Search..." onSearch={onSearch} />
            </div>

            {/* Icons */}
            <div className="col-8 col-lg-5 col-xl-4 topbar-icons text-capitalize d-flex justify-content-end align-items-center gap-4 gap-sm-5 g-0">
              <div className="topbar-icon-group">
                <NavLink className="text-color-dark" to="/wishlist">
                  <div className="floating-text-icon d-inline-block position-relative">
                    <HeartOutlined className="fs-2" />
                    <span className="floating-num">5</span>
                  </div>
                </NavLink>
              </div>

              <div className="topbar-icon-group">
                <NavLink className="text-color-dark" to="cart">
                  <div className="floating-text-icon d-inline-block position-relative">
                    <ShoppingCartOutlined className="fs-2" />
                    <span className="floating-num">0</span>
                  </div>
                </NavLink>
              </div>

              <div className="topbar-icon-group">
                <NavLink className="text-color-dark" to="notifications">
                  <div className="floating-text-icon d-inline-block position-relative">
                    <BellOutlined className="fs-2" />
                    <span className="floating-num">
                      9<sup>+</sup>
                    </span>
                  </div>
                </NavLink>
              </div>

              <div className="d-none d-lg-block">
                <NavLink to="login" className="fs-2">
                  <span className="d-none d-sm-inline">login</span>
                </NavLink>
                <span>/</span>
                <NavLink to="register" className="fs-2">
                  <span className="d-none d-sm-inline">register</span>
                </NavLink>
              </div>

              <span className="menu-icon ms-5 d-lg-none" role="button">
                <BarsOutlined className="display-5" onClick={showDrawer} />
              </span>
            </div>
          </div>
        </div>

        {/* Menubar */}
        <nav className="menubar d-none d-lg-block">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <div className="menubar-left">
                <ul className="menu">
                  <li>
                    <NavLink to="/">home</NavLink>
                  </li>
                  <li>
                    <NavLink to="about">about</NavLink>
                  </li>
                  <li>
                    <NavLink to="shop">shop</NavLink>
                  </li>
                  <li>
                    <NavLink to="">vendors</NavLink>
                  </li>
                  <li>
                    <NavLink to="">mega menu</NavLink>
                  </li>
                </ul>
              </div>
              <div className="menubar-right">
                <ul className="menu">
                  <li>
                    <NavLink to="contact">contact us</NavLink>
                  </li>
                  <li>
                    <NavLink to="faqs">faq</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Sidebar */}
      <Drawer placement="left" onClose={onClose} open={open}>
        <Sidebar />
      </Drawer>
    </>
  );
}

export default Header;
