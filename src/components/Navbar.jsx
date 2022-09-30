import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/create">Create</NavLink>
          <NavLink to="/event">Events</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
