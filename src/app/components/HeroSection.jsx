"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FiDownload } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-6 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-[31px] sm:text-2xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Kaustubh",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Web Developer",
                1000,
                "an App Developer",
                1000,
                "a Problem Solver",
                1000,
              ]}
              wrapper="span"
              speed={35}
              repeat={Infinity}
            />
          </h1>
          <p className=" text-base sm:text-lg mb-6 lg:text-xl text-[#fff] ">
            <br />
            Aspiring to become a software engineer, I am currently engaged in
            MERN stack development, focusing on honing my skills in data
            structures, algorithms, and problem-solving. <br />
            <br />I am a final year undergrad student at The LNMIIT, pursuing my
            B.Tech degree in Computer Science Engineering (CSE)
          </p>
          <div className="flex justify-center items-center focus:scale-110 hover:scale-110 active:scale-105 duration-200">
            {/* <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 mr-4 bg-white hover:bg-slate-200 text-white">
              Hire me
            </button> */}
            <a
              className=" flex items-center justify-center w-full sm:w-fit rounded-full text-white mt-8 cursor-pointer bg-[#121212] scale-105 px-5 py-2 border-2 border-[#ca61ca] font-semibold  gap-3 "
              href="/kaustubh resume.pdf"
              download
            >
              Dowload CV <FiDownload /> 
            </a>
          </div>
        </div>
        <div className="col-span-6 place-self-center mt-4 lg:mt-0">
          <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative scale-100 lg:scale-125">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full   "
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
