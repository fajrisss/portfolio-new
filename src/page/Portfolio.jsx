/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { project } from "../assets/projects";
import "./../index.css";
import RunningText from "../components/RunningText";
import Footer from "./../components/Footer";

const topTwoProjects = project.slice(0, 2);

const Portfolio = () => {
  return (
    <div className="">
      <div className="">
        <div className=" text-center py-24">
          <p className="">this is my personal</p>
          <h1 className="text-3xl py-4  font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            WORKSHOP
          </h1>
          <RunningText />
        </div>
        <div className="flex flex-col text-justify indent-16 gap-4 px-8 mb-32 text-lg">
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
            how I've been rocking Front-end Web Development. Feel free to hit that live demo button and take a peek at the magic behind the scenes!
          </p>
          <p>
            Thanks for swinging by, and I hope you enjoy the ride. If you have
            any questions or wanna team up on cool projects, <a href="/about" className="underline font-semibold hover:italic text-lg text-cyan-500 dark:text-sky-600">hit me up</a>. Let's
            keep learning and growing in the front-end world together!
          </p>
        </div>
        <div className="mb-14 ">
          {project.map((project) => (
            <div
              className=" p-3 pb-20 flex flex-col justify-center items-center shadow-top-shadow rounded-2xl -mt-14 text-slate-800 "
              key={project.id}
                style={{ backgroundColor: project.backgroundColor }}
              >
              <div 
              className=" border-0 border-slate-800 shadow-2xl rounded-2xl p-4"
              >
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

            // <div
            //   className="p-8 pb-20 flex flex-col justify-center items-center bg-gradient-to-br from-[#ffcd91] to-[#ffab73] shadow-2xl rounded-2xl -mt-10 text-slate-800 transform rotate-x-3 rotate-y-3 hover:rotate-x-0 hover:rotate-y-0 transition-transform duration-300"
            //   key={project.id}
            // >
            //   <div className="my-11 border border-slate-800 bg-white shadow-lg rounded-xl py-4 px-4 transform -rotate-x-3 -rotate-y-3 hover:rotate-x-0 hover:rotate-y-0 transition-transform duration-300">
            //     <h1 className="text-3xl md:text-4xl text-center font-bold mb-4 text-gray-900">
            //       {project.name}
            //     </h1>
            //     <img
            //       src={project.img}
            //       alt="project image"
            //       className="rounded-lg my-5"
            //     />
            //     <p className="text-lg md:text-xl text-justify leading-relaxed mb-6">
            //       {project.desc}
            //     </p>
            //     <div className="flex items-center justify-center space-x-4">
            //       <a
            //         href={project.code}
            //         target="_blank"
            //         rel="noopener noreferrer"
            //         className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg shadow-md transition-colors duration-300"
            //       >
            //         Source Code
            //       </a>
            //       <a
            //         href={project.demo}
            //         target="_blank"
            //         rel="noopener noreferrer"
            //         className="bg-[#ff6e40] hover:bg-[#ff5a1f] text-white py-2 px-6 rounded-lg shadow-md transition-colors duration-300"
            //       >
            //         Live Demo
            //       </a>
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>
        <Footer className="" />
      </div>
    </div>
  );
};

export default Portfolio;
