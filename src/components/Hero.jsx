/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import ME from "../assets/me.jpg";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const Hero = () => {
  return (
    <div className=" text-center py-16 md:min-h-screen md:flex md:items-center md:justify-center md:flex-col md:py-52">
      <div className=" flex flex-col justify-center items-center gap-7 md:flex-row">
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

        <div className="flex items-center justify-center relative z-0">
          <div className="w-60 h-60 bg-slate-300 dark:bg-slate-800 flex justify-center items-center rounded-full hover:w-64 hover:h-64 group dark:shadow-xl shadow-lg shadow-slate-950">
            <img
              src={ME}
              alt=""
              className="w-56 h-56 object-cover rounded-full group-hover:w-60 group-hover:h-60"
            />
          </div>
          <div className="absolute -right-10 flex flex-col gap-2 text-2xl md:flex-row md:-left-[237px] md:bottom-10">
            <a
              href="https://linkedin.com/in/fajjris"
              target="_blank"
              rel="noreferrer"
              className="text-2xl"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/fajrisss"
              target="_blank"
              rel="noreferrer"
              className="text-2xl"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.instagram.com/fajjrisshoba/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl"
            >
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="py-7">
        <div className=" flex mt-7 text-center justify-center mb-7">
          <div className=" w-5/6 md:w-2/4 h-max text-center ">
            <p className="text-lg">
              My little journey in front-end web development. This website also
              serves as my{" "}
              <Link
                to="/portfolio"
                className="font-bold italic underline text-cyan-500 dark:text-sky-600 text-xl"
              >
                Whorkshop
              </Link>{" "}
              and my playground to experiment with new aspects of front-end web
              development and to enhance my skills.{" "}
            </p>
          </div>
        </div>
        <Link
          to="/about"
          className="underline italic text-[16px] text-cyan-500 dark:text-sky-600 "
        >
          Discover more about me
        </Link>
      </div>
    </div>
  );
};

export default Hero;
