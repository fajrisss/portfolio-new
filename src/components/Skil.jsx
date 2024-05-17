/* eslint-disable no-unused-vars */
import React from "react";
import { FaReact, FaBootstrap, FaFigma } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { SiMui, SiTailwindcss } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";

const Skil = () => {
  return (
    <div className="h-max py-16 border-y dark:border-y-slate-800 border-y-slate-300  w-10/12 m-auto">
      <h1 className="text-center mb-7 text-3xl font-bold underline hover:italic">
        MY SKILLS
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="text-[2.5rem] rounded-xl flex items-center flex-col gap-2 border shadow-lg shadow-slate-900 dark:shadow-slate-500 w-32 h-32 justify-center dark:bg-slate-600 bg-slate-300 dark:text-slate-200 text-slate-800 ">
          <BsGit />
          <p className="text-lg">Git</p>
        </SwiperSlide>
        <SwiperSlide className="text-[2.5rem] rounded-xl flex items-center flex-col gap-2 border shadow-lg shadow-slate-900 dark:shadow-slate-500 w-32 h-32 justify-center dark:bg-slate-600 bg-slate-300 dark:text-slate-200 text-slate-800 ">
          <FaReact />
          <p className="text-lg">ReactJs</p>
        </SwiperSlide>
        <SwiperSlide className="text-[2.5rem] rounded-xl flex items-center flex-col gap-2 border shadow-lg shadow-slate-900 dark:shadow-slate-500 w-32 h-32 justify-center dark:bg-slate-600 bg-slate-300 dark:text-slate-200 text-slate-800 ">
          <FaBootstrap />
          <p className="text-lg">Bootstrap</p>
        </SwiperSlide>
        <SwiperSlide className="text-[2.5rem] rounded-xl flex items-center flex-col gap-2 border shadow-lg shadow-slate-900 dark:shadow-slate-500 w-32 h-32 justify-center dark:bg-slate-600 bg-slate-300 dark:text-slate-200 text-slate-800 ">
          <SiTailwindcss />
          <p className="text-lg">Tailwind</p>
        </SwiperSlide>
        <SwiperSlide className="text-[2.5rem] rounded-xl flex items-center flex-col gap-2 border shadow-lg shadow-slate-900 dark:shadow-slate-500 w-32 h-32 justify-center dark:bg-slate-600 bg-slate-300 dark:text-slate-200 text-slate-800 ">
          <SiMui />
          <p className="text-lg">Material UI</p>
        </SwiperSlide>
        <SwiperSlide className="text-[2.5rem] rounded-xl flex items-center flex-col gap-2 border shadow-lg shadow-slate-900 dark:shadow-slate-500 w-32 h-32 justify-center dark:bg-slate-600 bg-slate-300 dark:text-slate-200 text-slate-800 ">
          <FaFigma />
          <p className="text-lg">Figma</p>
        </SwiperSlide>
      </Swiper>

      {/* <div className="hidden md:block">
        <div className="flex items-center justify-evenly gap-10">
          <div className="text-[2.5rem] rounded-xl flex items-center flex-col gap-2 border shadow-lg shadow-slate-900 dark:shadow-slate-500 w-32 h-32 justify-center dark:bg-slate-600 bg-slate-300 dark:text-slate-200 text-slate-800 ">
            <BsGit />
            <p className="text-lg">Git</p>
          </div>
          <div className="text-[2.5rem] rounded-xl flex items-center flex-col gap-2 border shadow-lg shadow-slate-900 dark:shadow-slate-500 w-32 h-32 justify-center dark:bg-slate-600 bg-slate-300 dark:text-slate-200 text-slate-800 ">
            <FaReact />
            <p className="text-lg">ReactJs</p>
          </div>
          <div className="text-[2.5rem] rounded-xl flex items-center flex-col gap-2 border shadow-lg shadow-slate-900 dark:shadow-slate-500 w-32 h-32 justify-center dark:bg-slate-600 bg-slate-300 dark:text-slate-200 text-slate-800 ">
            <FaBootstrap />
            <p className="text-lg">Bootstrap</p>
          </div>
          <div className="text-[2.5rem] rounded-xl flex items-center flex-col gap-2 border shadow-lg shadow-slate-900 dark:shadow-slate-500 w-32 h-32 justify-center dark:bg-slate-600 bg-slate-300 dark:text-slate-200 text-slate-800 ">
            <SiTailwindcss />
            <p className="text-lg">Tailwind</p>
          </div>
          <div className="text-[2.5rem] rounded-xl flex items-center flex-col gap-2 border shadow-lg shadow-slate-900 dark:shadow-slate-500 w-32 h-32 justify-center dark:bg-slate-600 bg-slate-300 dark:text-slate-200 text-slate-800 ">
            <SiMui />
            <p className="text-lg">Material UI</p>
          </div>
          <div className="text-[2.5rem] rounded-xl flex items-center flex-col gap-2 border shadow-lg shadow-slate-900 dark:shadow-slate-500 w-32 h-32 justify-center dark:bg-slate-600 bg-slate-300 dark:text-slate-200 text-slate-800 ">
            <FaFigma />
            <p className="text-lg">Figma</p>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Skil;
