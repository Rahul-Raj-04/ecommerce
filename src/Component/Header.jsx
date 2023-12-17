import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <header className="sticky z-50 top-0 shadow-lg">
      <nav className="bg-[rgb(195,226,215)] border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl h-[75px]">
          <Link to="/" className="flex items-center">
            <img
              src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.1.447959664.1699399500&semt=sph"
              className="mr-3 h-12"
              alt="Logo"
            />
            <h1 className="text-4xl text-white font-bold">BRANDNAME</h1>
          </Link>
          <div className="flex items-center lg:order-2">
            {isLoggedIn && (
              <span className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                👤
              </span>
            )}
            {!isLoggedIn ? (
              <>
                <NavLink
                  to="/signin"
                  className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Sign Up
                </NavLink>
                <Link
                  to="/login"
                  className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Login
                </Link>
              </>
            ) : (
              <span
                onClick={() => setIsLoggedIn(false)} // Example logout function
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none cursor-pointer"
              >
                Logout
              </span>
            )}
          </div>
          <div className="lg:hidden justify-between items-center w-full">
            <button className="text-white focus:outline-none">☰</button>
          </div>
          <div className="hidden lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b text-lg ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 text-black`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 text-lg ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 text-black`
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 text-lg ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 text-black`
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 text-lg ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 text-black`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 text-lg ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 text-black`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
