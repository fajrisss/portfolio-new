/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaSun, FaMoon} from 'react-icons/fa'
import { Link } from "react-router-dom";

const Nav = () => {
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5";

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };


  return (
    <div className="fixed bg-slate-400 bg-opacity-50 h-20 w-full hidden sm:block">
      
      <div className=" relative flex justify-center items-center h-full w-full">
        <div className=" flex gap-3 text-xl">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="flex justify-right items-center gap-2 text-slate-800 font-medium p-3 absolute right-0">
          <input
            type="checkbox"
            id="toggleSwitch"
            className="hidden"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />

          <label htmlFor="toggleSwitch">
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center justify-between dark:bg-gray-400 bg-slate-900 rounded-full p-1 cursor-pointer relative"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <FaSun className=""/>
              <div
                className={
                  "dark:bg-slate-900 bg-slate-300 absolute md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                  (toggle ? null : toggleClass)
                }
              ></div>
              <FaMoon className=" text-slate-400"/>
            </div>
          </label>  
        </div>

      </div>

    </div>
  );
};

export default Nav;
