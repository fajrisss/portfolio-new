/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import ME2 from "./../assets/me2.jpg";
import ME3 from "./../assets/me3.jpeg";

const About = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_po0pb8c",
        "template_qgpwrq9",
        form.current,
        "jkNgBe-iVRY01z5Xe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mx-5">
      <div className="flex flex-col justify-center items-center gap-16 py-20 md:py-60">
        <div className="text-3xl font-bold capitalize">
          <h1>know me more</h1>
        </div>
        <div className="flex flex-col gap-10 text-lg lg:w-[1000px] md:w-5/6">
          <div className="">
            <img
              src={ME3}
              alt="iam"
              className="w-[100px] h-[100px] object-cover rounded-lg shadow-lg float-left mr-5"
            />
            <p className="text-justify indent-10 first-letter:text-2xl">
              Greetings! I'm Fajris, a recent graduate in Electrical Engineering
              from the Islamic University of Malang. The world of web
              development has captured my heart ever since high school, where I
              chose to specialize in Computer and Network Engineering. I started
              experimenting with web skeletons and creating eye-catching user
              interfaces, learning most of my web development skills through
              self-guided exploration.
            </p>
          </div>
          <div className="">
            <img
              src={ME2}
              alt="iam"
              className="w-[100px] h-[100px] object-cover rounded-lg shadow-lg float-right ml-5"
            />
            <p className="text-justify indent-9">
              In the past year, I've been fully immersed in mastering React JS,
              a groundbreaking JavaScript library that has revolutionized the
              web development landscape. Now, I'm all about crafting impressive
              and responsive web projects using the power of React JS. If you're
              looking to connect or collaborate, don't hesitate to{" "}
              <a
                href="#contact"
                className="underline font-semibold hover:italic text-cyan-500 dark:text-sky-600"
              >
                reach out.
              </a>{" "}
              Let's team up and create some remarkable web experiences together!
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center " >
        <div className=" w-10/12 lg:w-[1000px]" id="contact">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col justify-center items-center mx-4 py-8"
          >
            <div className="flex w-full flex-col md:flex-row md:gap-10">
              <div className="h-[150px] flex flex-col items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name ..."
                    className="w-full px-4 py-2 text-center border-b border-b-slate-200 dark:border-b-slate-800 bg-transparent focus:outline-none text-slate-200 dark:text-slate-800 focus:rounded-lg"
                  />
                </div>
                <div className="mb-4 md:mb-0">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your E-mail ..."
                    className="w-full px-4 py-2 text-center border-b border-b-slate-200 dark:border-b-slate-800 bg-transparent focus:outline-none text-slate-200 dark:text-slate-800 focus:rounded-lg"
                  />
                </div>
              </div>

              <div className="mb-4 md:mb-0 flex-1 h-[150px] flex justify-end ">
                <textarea
                  name="message"
                  placeholder="Type message Here..."
                  className="w-full  px-4 py-2 text-center border-b border-b-slate-200 dark:border-b-slate-800 bg-transparent focus:outline-none text-slate-200 dark:text-slate-800 focus:rounded-lg mt-5"
                ></textarea>
              </div>

            </div>
            <input
              type="submit"
              value="Send Message"
              className="w-[200px] h-14 bg-blue-500 hover:bg-blue-600 text-slate-200  py-2 rounded-lg transition duration-300 cursor-pointer my-12"
            />
          </form>
        </div>
      </div>
      <Footer className="w-screen" />
    </div>
  );
};

export default About;
