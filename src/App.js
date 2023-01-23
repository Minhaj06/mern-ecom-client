import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/nav/header/Header";
// import Sidebar from "./components/nav/Sidebar/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
