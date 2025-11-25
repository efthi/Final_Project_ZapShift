import React from "react";

const Navbar = () => {
  return (
    <>
      {/* <!-- =================================== -->
  <!-- 1. NAVBAR -->
  <!-- =================================== --> */}
      <div class="navbar bg-base-100 shadow-md sticky top-0 z-50">
        <div class="flex-1">
          <a href="#" class="btn btn-ghost text-xl font-bold text-success">
            ZapShift
          </a>
        </div>
        <div class="flex-none hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
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
        <div class="flex-none gap-2">
          <button class="btn btn-ghost">Sign In</button>
          <button class="btn btn-success text-white">Sign Up</button>
          <div class="dropdown dropdown-end lg:hidden">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
