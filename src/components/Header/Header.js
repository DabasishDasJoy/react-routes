import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <NavLink
        to={"/home"}
        className={({ isActive }) => (isActive ? "active" : "no")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) => (isActive ? "active" : "no")}
      >
        About
      </NavLink>
      <NavLink
        to={"/friends"}
        className={({ isActive }) => (isActive ? "active" : "no")}
      >
        Friends
      </NavLink>
    </div>
  );
};

export default Header;
