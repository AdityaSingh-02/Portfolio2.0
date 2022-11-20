import React from "react";
import { Parallax } from "react-parallax";
import Home from "../Images/Home.jpg";
import mobileHome from "../Images/Home2Mobile.jpg";
import Home2 from "../Images/Home2.jpg";

function components() {
  return (
    <>
      <Parallax
        strength={400}
        bgImage={Home}
        className="hidden lg:flex flex-col"
      >
        <div
          name="Home"
          className="HomeBackground flex flex-col md:flex md:flex-row justify-around px-10 items-center  z-0  h-[100vh] w-[100%]"
        >
          <div className="left">
            <h1 className="font-RedHat text-sm py-3">WELCOME TO MY WEBSITE</h1>
            <span className="py-6">
              <h2 className="font-Frank text-3xl md:text-5xl py-2">
                Hi, I'm Aditya Singh
              </h2>
              <h2 className="text-3xl md:text-5xl font-Frank py-2">
                a <span className="text-red-600">Web Developer</span>
              </h2>
            </span>
            <button className="border border-black px-5 py-2 font-teko my-7 text-lg mx-auto rounded-md">
              RESUME
            </button>
          </div>
          <div className="right">right</div>
        </div>
      </Parallax>

      {/* -----------------------------Mobile view------------------------------- */}
      <Parallax strength={200} bgImage={mobileHome} className="sm:hidden">
        <div
          name="Home"
          className="HomeBackground flex flex-col md:flex md:flex-row justify-around px-10 items-center  z-0  h-[100vh] w-[100%]"
        >
          <div className="left">
            <h1 className="font-RedHat text-sm py-3">WELCOME TO MY WEBSITE</h1>
            <span className="py-6">
              <h2 className="font-Frank text-3xl md:text-5xl py-2">
                Hi, I'm Aditya Singh
              </h2>
              <h2 className="text-3xl md:text-5xl font-Frank py-2">
                a <span className="text-red-600">Web Developer</span>
              </h2>
            </span>
            <button className="border border-black px-5 py-2 font-teko my-7 text-lg mx-auto rounded-md">
              RESUME
            </button>
          </div>
          <div className="right">right</div>
        </div>
      </Parallax>

      {/* ------------------------TAB view -----------------------*/}
      <Parallax
        strength={400}
        bgImage={Home2}
        className="lg:hidden hidden md:flex flex-col"
      >
        <div
          name="Home"
          className="HomeBackground flex flex-col md:flex md:flex-row justify-around px-10 items-center  z-0  h-[100vh] w-[100%]"
        >
          <div className="left">
            <h1 className="font-RedHat text-sm py-3">WELCOME TO MY WEBSITE</h1>
            <span className="py-6">
              <h2 className="font-Frank text-3xl md:text-5xl py-2">
                Hi, I'm Aditya Singh
              </h2>
              <h2 className="text-3xl md:text-5xl font-Frank py-2">
                a <span className="text-red-600">Web Developer</span>
              </h2>
            </span>
            <button className="border border-black px-5 py-2 font-teko my-7 text-lg mx-auto rounded-md">
              RESUME
            </button>
          </div>
          <div className="right">right</div>
        </div>
      </Parallax>
    </>
  );
}

export default components;
