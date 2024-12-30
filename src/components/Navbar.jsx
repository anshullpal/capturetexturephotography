import React, { useState } from 'react';
import logo from '../assets/logo.jpg'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-50 flex justify-between px-4 md:px-10 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="btn btn-ghost lg:hidden"
            >
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {menuOpen && (
              <ul
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li><a href="https://capturetexturephotography.netlify.app/">Home</a></li>
                <li><a href="https://capturetexturephotography.netlify.app/services">Services</a></li>
                <li><a href="https://capturetexturephotography.netlify.app/gallery">Gallery</a></li>
                <li><a href="https://capturetexturephotography.netlify.app//aboutus">About Us</a></li>
                <li><a href="https://capturetexturephotography.netlify.app/contactus">Contact Us</a></li>
              </ul>
            )}
          </div>
          <div className="ml-4 md:ml-10">
            <a className="cursor-pointer">
              <img src={logo} alt="Logo" className="max-w-[200px]" />
            </a>
          </div>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center">
            <li><a href="https://capturetexturephotography.netlify.app/">Home</a></li>
            <li><a href="https://capturetexturephotography.netlify.app/services">Services</a></li>
            <li><a href="https://capturetexturephotography.netlify.app/gallery">Gallery</a></li>
            <li><a href="https://capturetexturephotography.netlify.app/aboutus">About Us</a></li>
            <li><a href="https://capturetexturephotography.netlify.app/contactus">Contact Us</a></li>
          </ul>
        </div>

        <div className="mr-2 md:mr-12">
          <a className="btn bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer" href="https://capturetexturephotography.netlify.app/booknow">
            Book Now
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
