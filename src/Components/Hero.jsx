import React from "react";
import DesktopBg from "../assets/bg-intro-desktop.svg";
import Mockpus from "../assets/image-mockups.png";

const Hero = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden md:pl-32">
      <div className=" max-w-360 mx-auto px-6 min-h-[80vh] flex flex-col-reverse md:flex-row items-center">
        <div className="relative z-20 w-full md:w-1/2 text-center md:text-left space-y-6 py-12 md:mr-10">
          <h1 className="text-4xl md:text-5xl leading-tight font-light text-slate-800 z-90 relative">
            Next generation digital banking
          </h1>

          <p className="text-gray-500 max-w-md mx-auto md:mx-0">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <button className="hidden md:block bg-linear-to-r from-[hsl(136,64%,51%)] to-[hsl(192,69%,51%)] text-white py-3 px-8 rounded-full text-sm font-medium shadow-md hover:opacity-70 transition-opacity duration-200 mx-auto md:mx-0">
            Request invite
          </button>
        </div>

        <div className="w-full md:w-1/2 relative flex justify-center md:justify-end md:translate-x-20 z-20">
          <img
            src={DesktopBg}
            alt="Background Shape"
            className="absolute z-0 -top-32 -right-32 w-[150%] md:w-[160%] max-w-none"
          />

          <img
            src={Mockpus}
            alt="Mockups"
            className="relative z-10 w-[90%] md:w-[120%] lg:w-full max-w-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
