import React from "react";
import Skill from "./Skill";

const skills = [
  {
    name: "C++",
    path: "https://samarthdengre.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcp.c0e7e241.webp&w=128&q=75",
  },
  {
    name: "Java",
    path: "https://samarthdengre.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjava.a8c59ad7.webp&w=128&q=75",
  },
  {
    name: "Javascript",
    path: "https://samarthdengre.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjavascript.8466c1e3.webp&w=128&q=75",
  },
  {
    name: "React",
    path: "https://samarthdengre.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnative.d225202e.png&w=128&q=75",
  },
  {
    name: "Next",
    path: "data:image/png;base64,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",
  },
  {
    name: "Node",
    path: "https://samarthdengre.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnodejs.5ac798a1.webp&w=128&q=75",
  },
  {
    name: "MongoDB",
    path: "https://samarthdengre.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmongodb.351aa7ea.webp&w=128&q=75",
  },
  {
    name: "MySql",
    path: "https://samarthdengre.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmySQL.a8e9fd7e.webp&w=128&q=75",
  },
  {
    name: "HTML",
    path: "https://samarthdengre.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhtml.ac9353f9.webp&w=128&q=75",
  },
  {
    name: "CSS",
    path: "https://samarthdengre.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcss.b0752494.webp&w=128&q=75",
  },
  {
    name: "DSA",
    path: "https://samarthdengre.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDSA.5ccf4324.webp&w=128&q=75",
  },
];

const AboutSection = () => {
  return (
    <div>
      <h1
        className="text-center mb-5 text-3xl sm:text-3xl lg:text-5xl font-extrabold mt-[120px]
                text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-800 "
      >
        My Current Skills
      </h1>
      <div className="flex flex-wrap justify-center w-100% h-fit bg-slate-500 rounded-xl border-[#33353F] py-5 px-3 bg-opacity-10 ">
        {skills.map((skill, index) => (
          <Skill key={index} skillName={skill.name} skillPath={skill.path} />
        ))}
      </div>
      <div id="projects" className="mb-[55px]"></div>
    </div>
  );
};

export default AboutSection;
