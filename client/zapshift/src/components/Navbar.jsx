import React from "react";

const Navbar = () => {
  return (
    <>
      {/* <!-- =================================== -->
  <!-- 1. NAVBAR -->
  <!-- =================================== --> */}
      <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
        <div className="flex-1">
          <a href="#" className="btn btn-ghost text-xl font-bold text-success">
            ZapShift
          </a>
        </div>
        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#coverage">Coverage</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex-none gap-2">
          <button className="btn btn-ghost">Sign In</button>
          <button className="btn btn-success text-white">Sign Up</button>
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Coverage</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
