import React from "react";
import ProjectCard from "./ProjectCard";
const projectsData = [
  {
    id: 1,
    title: "Blogify",
    description:
      "It is responsive a full stack blogging website for writers and readers",
    image: "/images/projects/blogimg.png",
    gitUrl: "https://github.com/Kaustubh-Narwade/blogapp",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Chatify",
    description:
      "A simple MERN application to chat with your friends and family with authentication and authorization",
    image: "/images/projects/chatimg.png",
    gitUrl: "https://github.com/Kaustubh-Narwade/Chatify",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "I have created this website to showcase some of my highlighted works and to gain experience with Next.js",
    image: "/images/projects/portimg.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Sign Language Detection",
    description:
      "This mobile application was created as a part of our 4 member group mobile devlopment course ",
    image: "/images/projects/sasl.png",
    gitUrl: "https://github.com/Prashantsgh/Sign-Language-Detection",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  return (
    <div>
      <h1
        className=" text-center mb-8 text-3xl sm:text-3xl lg:text-5xl font-extrabold
                text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-800"
      >
        My Projects
      </h1>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 justify-center text-center align-center">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
