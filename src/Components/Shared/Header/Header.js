import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.png";

const Header = () => {
  return (
    <div class="navbar bg-primary sm:p-0 md:px-5">
      <div class="navbar-start m-0">
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
              <Link
                className="uppercase font-bold  md:text-white italic  md:hover:bg-white hover:text-primary "
                to="/"
              >
                Home
              </Link>
            </li>
            

            <li>
              <Link
                className="uppercase font-bold  md:text-white italic  md:hover:bg-white hover:text-primary"
                to="/about"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className="uppercase font-bold  md:text-white italic  md:hover:bg-white hover:text-primary"
                to="/inventory"
              >
                Inventory
              </Link>
            </li>
            <li>
              <Link
                className="uppercase font-bold  md:text-white italic  md:hover:bg-white hover:text-primary"
                to="/blog"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" class=" normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div class="navbar-center m-0">
        {/* <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered" />
        </div> */}
      </div>
      <div class="navbar-end hidden lg:flex m-0">
      <ul class="menu menu-horizontal p-0">
          <li>
            <Link
              className="uppercase font-bold  md:text-white italic  md:hover:bg-white hover:text-primary"
              to="/"
            >
              Home
            </Link>
          </li>
          
          <li>
              <Link
                className="uppercase font-bold  md:text-white italic  md:hover:bg-white hover:text-primary"
                to="/about"
              >
                About us
              </Link>
            </li>

          <li>
            <Link
              className="uppercase font-bold  md:text-white italic  md:hover:bg-white hover:text-primary"
              to="/inventory"
            >
              Inventory
            </Link>
          </li>
          <li>
            <Link
              className="uppercase font-bold  md:text-white italic  md:hover:bg-white hover:text-primary"
              to="/blog"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
               to="/login"
               class=" uppercase text-white italic font-bold  hover:bg-white hover:text-primary "
             >
               LogIn
            </Link>
          </li>
        </ul>
        
        {/* <div class="dropdown dropdown-end">
        
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
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
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
