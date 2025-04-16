import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaExternalLinkAlt,
  FaFlutter
} from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { SiRedux, SiVite, SiTailwindcss, SiAuth0, SiExpress, SiPostgresql, SiNextdotjs, SiFirebase, SiTypescript, SiWebrtc, SiWebsocket } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

function Projects() {
  const getTechIcon = (tech) => {
    switch (tech) {
      case "React":
        return <FaReact size={28} className="text-blue-500" />;
      case "Node.js":
        return <FaNodeJs size={28} className="text-green-600" />;
      case "MongoDB":
        return <FaDatabase size={28} className="text-green-700" />;
      case "Redux":
        return <SiRedux size={28} className="text-purple-600" />;
      case "Vite":
        return <SiVite size={28} className="text-blue-600" />;
      case "TailwindCSS":
        return <SiTailwindcss size={28} className="text-teal-400" />;
      case "Auth0":
        return <SiAuth0 size={28} className="text-orange-500" />;
      case "Express.js":
        return <SiExpress size={28} className="text-yellow-800 dark:text-yellow-200" />;
      case "PostgreSQL":
        return <SiPostgresql size={28} className="text-blue-700" />;
      case "Next.js":
        return <SiNextdotjs size={28} className="text-black dark:text-white" />;
      case "Firebase":
        return <SiFirebase size={28} className="text-yellow-400"/>
      case "Typescript":
        return <SiTypescript size={28} className="text-blue-500"/>
      case "AI":
        return <GiArtificialIntelligence size={28} className="text-blue-500" />
      case "WebRTC":
        return <SiWebrtc size={28} className="text-blue-500" />;
      case "WebSockets":
        return <CiChat1 size={28} className="text-blue-500" />;
      case "Flutter":
        return <FaFlutter size={28} className="text-blue-500" />;
      default:
        return null;
    }
  };

  const projects = [
    {
      title: "Myriad",
      imageUrl: "myriad.png",
      link: "https://github.com/Jagjit0306/Myriad",
      linkType: "github",
      techStack: "Flutter, Firebase",
      demo: "https://github.com/Jagjit0306/Myriad/releases"
    },
    {
      title:"2D Metaverse",
      imageUrl: "meta1.png",
      link: "https://github.com/gurshaan17/2d_metaverse",
      linkType: "github",
      techStack: "WebRTC, WebSockets, React, MongoDB",
      demo: "https://metaverse.gurshaan.xyz",
    },
    {
      title:"AI Resume Generator",
      imageUrl: "/cv.png",
      link: "https://github.com/gurshaan17/resume-builder",
      linkType: "github",
      techStack: "Next.js, AI, TailwindCSS, Typescript",
      demo: "https://resume-builder.gurshaan.xyz"
    },
    {
      title: "StoryTeller AI",
      imageUrl: "/story.png",
      link: "https://github.com/gurshaan17/story-teller",
      linkType: "github",
      techStack: "Next.js, AI, TailwindCSS, Typescript",
      demo: "https://storyteller.gurshaan.xyz"
    },
    {
      title:"Web3 Wallet",
      imageUrl: "/wallet.png",
      link: "https://github.com/gurshaan17/wallet",
      linkType: "github",
      techStack:"Next.js, Node.js, TailwindCSS, Typescript",
      demo: "https://wallet.gurshaan.xyz"
    },
    {
      title:"URL Shortener",
      imageUrl:"/url.png",
      link:"https://github.com/gurshaan17/url-fe",
      linkType:"github",
      techStack:"Next.js, MongoDB, Node.js, TailwindCSS",
      demo:"https://shorturl17.vercel.app"
    },{
      title: "Pastebin",
      imageUrl: "/paste.png",
      link: "https://github.com/gurshaan17/pastebin",
      linkType:"github",
      techStack:"Next.js, MongoDB, Node.js, Typescript",
      demo: "https://controlc.vercel.app"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 pt-20">
      <h2 className="text-4xl md:pl-4 md:text-6xl pb-8 font-prata text-gray-900 dark:text-gray-200 text-center sm:text-left">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto justify-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-gray-900 transform hover:scale-95 transition duration-300 w-full"
          >
            <div className="relative flex flex-col h-full text-left">
              <img
                src={project.imageUrl}
                alt={`Project ${project.title}`}
                className="object-cover w-full h-72 rounded-t-lg"
                style={{ objectFit: "cover" }}
              />
              <div className="p-4 flex flex-col justify-between h-full w-full">
                <h3 className="text-xl pb-4 text-bold text-center font-semibold font-comfortaa dark:text-amber-400 mt-4">
                  {project.title}
                </h3>
                <div className="flex flex-col justify-start h-full pt-4 pb-2">
                  <div className="flex flex-wrap gap-3 justify-center">
                    {project.techStack.split(", ").map((tech, idx) => (
                      <div key={idx} className="flex justify-center items-left">
                        <div className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-lg">
                          <div className="w-8 h-8 flex justify-center items-center">
                            {getTechIcon(tech.trim())}
                          </div>
                          <span className="text-xs md:text-sm dark:text-gray-200">
                            {tech.trim()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-600 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-500 transition"
                  >
                    <FaGithub className="text-xl text-white" />
                    <span className="text-sm text-white">GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-600 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-500 transition"
                  >
                    <FaExternalLinkAlt className="text-xl text-white" />
                    <span className="text-sm text-white">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;