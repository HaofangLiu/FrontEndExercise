import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink
        to="/"
        exact
        activeClassName="active"
        activeStyle={{
          color: "red"
        }}
        // isActive={() => {
        //     return true;//为true代表选中该项，否则没有选中
        // }}
      >
        Main Page
      </NavLink>
      <span> | </span>
      <NavLink
        to="/about"
        activeClassName="active"
        exact
        activeStyle={{
          color: "red"
        }}
      >
        About us
      </NavLink>
    </nav>
  );
}

export default Nav;
