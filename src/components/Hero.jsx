/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import ME from "../assets/me.jpg";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import {MdKeyboardDoubleArrowDown } from 'react-icons/md'

const Hero = () => {
  // const playlistId = '4nFF9Ji6eLOKBX4r4uJBR4';
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
    <div className=" flex flex-col justify-center items-center gap-7">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full text-left">
          <p className="">Hi, i'm</p>
          <div className="text-lg flex  gap-2">
            <p className=" font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent text-2xl ">
              FAJJRIS
            </p>
            <div className="animate-waving-hand">
              {" "}
              <span className="text-2xl">👋🏻</span>{" "}
            </div>
          </div>
        </div>
        <p className="text-left w-full">
          im a <span className="font-semibold"> front-end enthusiast</span>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center relative gap-20">
        <div className="w-60 h-60 dark:bg-slate-300 bg-slate-800 flex justify-center items-center rounded-full hover:w-64 hover:h-64 group shadow-xl dark:shadow-lg dark:shadow-slate-950 ">
          <img
            src={ME}
            alt=""
            className="w-56 h-56 object-cover rounded-full group-hover:w-60 group-hover:h-60"
          />
        </div>
        <div className="absolute -right-10 flex flex-col gap-2 text-2xl">
          <a href="https://linkedin.com/in/fajjris" target='_blank' rel="noreferrer" className="text-2xl"><BsLinkedin/></a>
          <a href="https://github.com/fajrisss" target='_blank' rel="noreferrer" className="text-2xl"><BsGithub/></a>
          <a href="https://www.instagram.com/fajjrisshoba/" target='_blank' rel="noreferrer" className="text-2xl"><BsInstagram/></a>
        </div>
      </div>

      <div className=" flex mt-7 justify-center">
        <div className=" w-5/6 h-max text-center ">
          <p className="text-lg">My little journey in front-end web development. This website also serves as my <Link to="/portfolio" className="font-bold underline dark:text-cyan-500 text-sky-600 text-xl">Whorkshop</Link> and my playground to experiment with new aspects of front-end web development and to enhance my skills. </p>
          
        </div>
      </div>
    </div>
    <a href="/about" className="underline italic text-[16px] dark:text-cyan-500 text-sky-600 mt-9">Discover more about me</a> 
    </div>
  );
};

export default Hero;