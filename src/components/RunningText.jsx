/* eslint-disable no-unused-vars */
import React from 'react';

import './../index.css'

const RunningText = () => {
  return (
    <div className="running-text-container border border-slate-800 shadow-2xl bg-slate-200 dark:bg-white py-1 md:w-screen lg:w-[1000px]">
      <div className="running-text ">
      <p className='font-serif text-slate-800 text-lg font-semibold'><span className=" text-red-500 font-bold text-xl ">WARNING :</span> this page is my personal workshop. only allowed to access source code and live demo button. </p>
      </div>
    </div>
  );
};

export default RunningText;
