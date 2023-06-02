/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center gap-12">
      <div className="border-y border-y-slate-800 dark:border-y-slate-200 p-5 w-10/12 m-auto ">
        <h1 className="text-2xl font-semibold">Let's</h1>
        <h1 className="text-[45px] font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          CONNECT
        </h1>
      </div>
      <div className=" flex gap-7">
        <a
          href="https://linkedin.com/in/fajjris"
          target="_blank"
          rel="noreferrer"
          className="text-[40px]"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/fajrisss"
          target="_blank"
          rel="noreferrer"
          className="text-[40px]"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.instagram.com/fajjrisshoba/"
          target="_blank"
          rel="noreferrer"
          className="text-[40px]"
        >
          <BsInstagram />
        </a>
      </div>
      <div className=" pt-12 pb-2">
        <p className="text-sm">© 2023 All rights reserved.  |  Made with ❤️ by me. </p>
      </div>
    </div>
  );
};

export default Footer;
