import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="flex justify-between px-40 bg-slate-900 sticky top-0 z-10 py-5 text-2xl font-bold">
        <NavLink to="/" className="cursor-pointer bg-white px-2 rounded-md">
          Home
        </NavLink>
        <div className="flex gap-10">
          <NavLink
            to="/counter"
            className="cursor-pointer bg-white px-2 rounded-md"
          >
            Counter App
          </NavLink>

          <NavLink
            to="/users"
            className="cursor-pointer bg-white px-2 rounded-md"
          >
            Fetch API Data
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
