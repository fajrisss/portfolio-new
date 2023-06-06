/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
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
    <div className="fixed bg-slate-400  bg-opacity-90 h-20  hidden md:block px-24 w-screen dark:bg-slate-600">
      <div className="flex justify-between items-center h-full w-full ">

        
        <Link href="/" className='text-slate-800 dark:text-slate-200 font-serif text-3xl font-bold  border border-slate-800 dark:border-slate-200 hover:border-slate-600 hover:text-slate-950 rounded-full py-1.5 px-3' >R I S</Link>
       


        <div className="text-slate-800 dark:text-slate-200 flex gap-3 font-semibold  text-xl ">
          <Link className="hover:text-slate-950 hover:text-2xl" to="/">
            Home
          </Link>
          <Link className="hover:text-slate-950 hover:text-2xl" to="/portfolio">
            Portfolio
          </Link>
          <Link className="hover:text-slate-950 hover:text-2xl" to="/about">
            About
          </Link>
        </div>

        <div className="flex justify-right items-center gap-2 text-slate-800 font-medium p-3">
          <input
            type="checkbox"
            id="toggleSwitch"
            className="hidden"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />

          <label htmlFor="toggleSwitch">
            <div
              className="w-[52px] h-7 flex items-center justify-between dark:bg-gray-400 bg-slate-900 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <FaMoon className="text-slate-400 " />
              <div
                className={
                  "dark:bg-slate-900 bg-slate-300 absolute h-6 w-6 rounded-full shadow-md transform duration-300 ease-in-out" +
                  (toggle ? null : toggleClass)
                }
              ></div>
              <FaSun className="" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Nav;
