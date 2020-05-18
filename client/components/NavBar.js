import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">List</Link>
      <Link to="/new">Create</Link>
    </nav>
  );
}

export default NavBar;
