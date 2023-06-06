/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { project } from "../assets/projects";
import "./../index.css";
import RunningText from "../components/RunningText";
import Footer from "./../components/Footer";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="">
      <div className="flex flex-col md:justify-center md:items-center md:pt-20">
        <div className=" text-center py-24">
          <p className="">this is my personal</p>
          <h1 className="text-3xl md:text-[50px] font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent md:py-10 py-4">
            WORKSHOP
          </h1>
          <RunningText className="md:w-5/6" />
        </div>
        <div className="flex flex-col text-justify indent-16 gap-4 md:gap-10 px-8 mb-32 text-lg lg:w-[1000px] md:w-5/6">
          <p>
            Hey there, welcome to my portfolio! Here's where I showcase my
            awesome web projects and give you a glimpse of my journey in the
            front-end world. I'm a beginner, been diving deep into ReactJS for
            the past year.
          </p>
          <p>
            This portfolio is my little creative haven, where I get to play with
            code and bring my ideas to life. I'm all about crafting sleek
            designs, building captivating interfaces, and making the user
            experience shine with web tech.
          </p>
          <p>
            As you explore this place, I hope you find some inspiration and see
            how I've been rocking Front-end Web Development. Feel free to hit
            that live demo button and take a peek at the magic behind the
            scenes!
          </p>
          <p>
            Thanks for swinging by, and I hope you enjoy the ride. If you have
            any questions or wanna team up on cool projects,{" "}
            <Link
              to="/about"
              className="underline font-semibold hover:italic text-lg text-cyan-500 dark:text-sky-600"
            >
              hit me up
            </Link>
            . Let's keep learning and growing in the front-end world together!
          </p>
        </div>
      </div>
      <div className="">
        <div className="mb-14 block md:flex md:flex-wrap md:gap-10 md:justify-center md:items-center md:mb-32 lg:mx-14">
          {project.map((project) => (
            <div
              className=" p-3 pb-20 flex flex-col justify-center items-center shadow-top-shadow rounded-2xl -mt-14 text-slate-800 md:w-[500px] lg:w-[400px] md:mt-0 md:p-0"
              key={project.id}
              style={{ backgroundColor: project.backgroundColor }}
            >
              <div className=" border-0 border-slate-800 shadow-2xl rounded-2xl p-4">
                <h1 className="text-[27px] text-center  uppercase font-semibold mt-5">
                  {project.name}
                </h1>
                <img
                  src={project.img}
                  alt="project iamge"
                  className="rounded-lg my-5"
                />
                <p className="text-lg font-medium text-justify indent-10">
                  {project.desc}
                </p>
                <div className="flex items-center justify-center py-4 pt-7 gap-4">
                  <a
                    href={project.code}
                    target="blank"
                    className="border border-slate-800 shadow-md rounded-md bg-purple-600 text-[#f5f0e1] px-3 py-1.5"
                  >
                    Source Code
                  </a>
                  <a
                    href={project.demo}
                    target="blank"
                    className="border border-slate-800 shadow-md rounded-md bg-[#ff6e40] text-[#f5f0e1] px-3 py-1.5"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer className="" />
      </div>
    </div>
  );
};

export default Portfolio;
