import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => (
  <nav>
    <ul classname="flex space-x-4">
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/AdminPortal">
          Admin Portal
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/ViewPublicData">
          View Public Data
        </NavLink>
      </li>
    </ul>
  </nav>
);
export default Nav;
