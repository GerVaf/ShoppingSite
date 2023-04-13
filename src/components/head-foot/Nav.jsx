import React from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../../image/logo1.jpg";

const Nav = () => {
  return (
    <>
      <div className=" shadow-md navbar bg-base-100 w-[100%] p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>Homepage</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/portfolio"}>Portfolio</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">

          <img className=" w-20" src={logo1} alt="" />
        </div>
        
      </div>
    </>
  );
};

export default Nav;
