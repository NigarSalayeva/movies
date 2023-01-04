import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Movies">Movies</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
    </nav>
  );
}