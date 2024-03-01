import React from "react";

const Skill = ({ skillName, skillPath }) => {
  return (
    <div className="flex gap-3 w-fit h-fit bg-[#121212] rounded-xl border border-[#33353F] hover:bg-slate-400 hover:bg-opacity-20  px-5 py-3 mx-4 my-2 duration-[350ms] cursor-default">
      <p className="text-2xl text-[#dedddd]">{skillName}</p>
      <img className="h-8 w-8" src={skillPath} alt="C++" />
    </div>
  );
};

export default Skill;
