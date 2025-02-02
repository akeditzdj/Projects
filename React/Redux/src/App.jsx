import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import Users from "./Components/Users";
import Contact from "./Components/Contact";
import About from "./Components/About";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar bg-dark navbar-expand-lg py-3 px-3">
        <div className="container-fluid">
          <div className="nav-brand">
            <NavLink to="/">
              <h1>LOGO</h1>
            </NavLink>
          </div>
          <div className="navbar-nav">
            <NavLink to="home">Home</NavLink>
            <NavLink to="users">Users</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
