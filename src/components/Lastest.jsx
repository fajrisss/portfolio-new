/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { project } from "../assets/projects";

const topTwoProjects = project.slice(0, 3);

const Lastest = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center py-40">
      <h1 className="text-3xl mb-14 font-bold">My Lastest Project</h1>
        <div className="mx-[18px] flex flex-col gap-9">
          {topTwoProjects.map((project) => (
            <div
              className=" border rounded-lg shadow-lg p-4 dark:shadow-slate-900 flex flex-col justify-center items-center gap-5"
              key={project.id}
            >
              <img src={project.img} alt="project iamge" className="rounded-lg " />
              <div className="">
                <h1 className="text-xl uppercase font-semibold my-1">{project.name}</h1>
                <p className="text-lg text-justify indent-10">{project.simpleDesc}</p>
              </div>
              <div className="flex items-center justify-between gap-4">
                <a href={project.code} target="blank" className="border shadow-md rounded-md bg-purple-600 text-slate-200 px-3 py-1.5">Source Code</a>
                <a href={project.demo} target="blank" className="border shadow-md rounded-md bg-[#ff6e40] text-[#f5f0e1] px-3 py-1.5">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-7">Explore all of my projects by clicking <a href="/portfolio" className="underline italic cursor-pointer text-lg">here</a></p> 
    </div>
  );
};

export default Lastest;
