/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
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
      <div className="flex flex-col justify-center items-center gap-12 min-h-screen">
        <div className="text-3xl font-bold capitalize">
          <h1>know me more</h1>
        </div>
        <div className="flex flex-col gap-7 text-lg">
          <p>
            Greetings! I'm Fajris, a recent graduate in Electrical Engineering
            from the Islamic University of Malang. The world of web development
            has captured my heart ever since high school, where I chose to
            specialize in Computer and Network Engineering. I started
            experimenting with web skeletons and creating eye-catching user
            interfaces, learning most of my web development skills through
            self-guided exploration.
          </p>
          <p>
            In the past year, I've been fully immersed in mastering React JS, a
            groundbreaking JavaScript library that has revolutionized the web
            development landscape. Now, I'm all about crafting impressive and
            responsive web projects using the power of React JS.
          </p>
          <p>
            If you're looking to connect or collaborate, don't hesitate to{" "}
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
      <div className="min-h-screen flex flex-col items-center justify-between" id="contact">
        <div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col justify-center items-center px-4 py-8"
          >
            <div className="w-full max-w-md">
              <div className="mb-4">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name ..."
                  className="w-full px-4 py-2 text-center border-b border-b-slate-200 dark:border-b-slate-800 bg-transparent focus:outline-none text-slate-200 dark:text-slate-800 focus:rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your E-mail ..."
                  className="w-full px-4 py-2 text-center border-b border-b-slate-200 dark:border-b-slate-800 bg-transparent focus:outline-none text-slate-200 dark:text-slate-800 focus:rounded-lg"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Type Here..."
                  className="w-full px-4 py-2 text-center border-b border-b-slate-200 dark:border-b-slate-800 bg-transparent focus:outline-none text-slate-200 dark:text-slate-800 focus:rounded-lg mt-5"
                ></textarea>
              </div>
              <input
                type="submit"
                value="Send Message"
                className="w-full bg-blue-500 hover:bg-blue-600 text-slate-200  py-2 rounded-lg transition duration-300 cursor-pointer"
              />
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
