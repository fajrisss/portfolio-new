/* eslint-disable no-unused-vars */
import { useState } from "react";
import { MdMenuOpen, MdClose, MdArrowDropDownCircle } from "react-icons/md";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5";

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div>
      <nav className="bg-red-500 bottom-10 right-5 fixed w-max rounded-full block sm:hidden">
        <div className="relative ">
          <button className="p-2" onClick={() => setNavbar(!navbar)}>
            {navbar ? <MdClose className="text-lg"/> : <MdMenuOpen className="text-lg"/>}
          </button>
          <div className="absolute -top-[62px] right-[2px] text-right flex flex-col items-end">
            <p className="mb-1 text-sm">navbar here</p>
            <MdArrowDropDownCircle className="animate-bounce mr-2"/>
          </div>
        </div>
      </nav>
      <div className={`${navbar ? "block" : "hidden"}`}>
        <div className="w-4/5 bg-slate-950 dark:bg-slate-200 bg-opacity-80 text-slate-200 dark:text-slate-800 dark:bg-opacity-80 h-10 fixed bottom-[34px] right-16 rounded-3xl flex justify-around items-center">
          <div className="flex gap-3">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About</Link>
          </div>

          <div className="flex justify-right items-center gap-2 text-slate-800 font-medium">
            <input
              type="checkbox"
              id="toggleSwitch"
              className="hidden"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />

            <label htmlFor="toggleSwitch">
              <div
                className="md:w-14 md:h-7 w-12 h-6 flex items-center justify-between dark:bg-gray-400 bg-slate-900 rounded-full p-1 cursor-pointer"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <FaSun className="" />
                <div
                  className={
                    "dark:bg-slate-900 bg-slate-300 absolute md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                    (toggle ? null : toggleClass)
                  }
                ></div>
                <FaMoon className=" text-slate-400" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
