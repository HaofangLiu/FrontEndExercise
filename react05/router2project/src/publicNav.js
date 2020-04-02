import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Pnav(props) {
  let { className, navData } = props;
  let { pathname } = useLocation();
  return (
    <nav className={className}>
      {navData.map((item, index) => {
        return (
          <NavLink 
          to={item.path} 
          exact={item.exact} 
          key={index} 
          isActive={item.isActive?() => {
              return item.isActive(pathname);
          }:null}>
            {item.name}
          </NavLink>
        );
      })}
    </nav>
  );
}
export {Pnav};
