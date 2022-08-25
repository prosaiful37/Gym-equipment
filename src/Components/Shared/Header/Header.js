import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.png";

const Header = () => {
  return (
    <div class="navbar bg-primary">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="uppercase font-bold text-white italic  hover:bg-white hover:text-primary" to='/'>Home</Link>
            </li>
            <li tabindex="0">
              <Link className="uppercase font-bold text-white italic  hover:bg-white hover:text-primary" to='/about' class="justify-between">
                About
                
              </Link>
              
            </li>
            <li>
              <Link className="uppercase font-bold text-white italic  hover:bg-white hover:text-primary"  to='/inventory'>Inventory</Link>
            </li>
            <li>
              <Link className="uppercase font-bold text-white italic  hover:bg-white hover:text-primary" to='/blog'>Blogs</Link>
            </li>
          </ul>
        </div>
        <Link to='/' class=" normal-case text-xl">
            <img src={logo} alt="" />
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
        <li>
              <Link className="uppercase font-bold text-white italic  hover:bg-white hover:text-primary" to='/'>Home</Link>
            </li>
            <li tabindex="0">
              <Link className="uppercase font-bold text-white italic  hover:bg-white hover:text-primary" to='/about' class="justify-between">
                About
                
              </Link>
              
            </li>
            <li>
              <Link className="uppercase font-bold text-white italic  hover:bg-white hover:text-primary" to='/inventory'>Inventory</Link>
            </li>
            <li>
              <Link className="uppercase font-bold text-white italic  hover:bg-white hover:text-primary" to='/blog'>Blogs</Link>
            </li>
        </ul>
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <div class="dropdown dropdown-end">
        <Link to='/login' class="btn btn-ghost text-white  hover:bg-white hover:text-primary ">Log In</Link>
          {/* <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
