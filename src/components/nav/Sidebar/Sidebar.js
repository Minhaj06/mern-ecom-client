import React from "react";
import "./sidebar.css";

import { Tabs } from "antd";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: `Tab 1`,
    children: (
      <div id="menuTab" class="tab-pane active show" role="tabpanel">
        <h3 class="pb-4 border-bottom text-center brand-color font-weight-500 mb-4">
          Main Menu
        </h3>

        <ul class="sidebar-content-item">
          <li class="nav-item">
            <a href="">home</a>
          </li>
          <li class="nav-item">
            <a href="">about</a>
          </li>
          <li class="nav-item">
            <a href="">shop</a>
          </li>
          <li class="nav-item">
            <a href="">vendors</a>
          </li>
          <li class="nav-item">
            <a href="">contact us</a>
          </li>
          <li class="nav-item">
            <a href="">Faq</a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "2",
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
  },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
}

export default Sidebar;
