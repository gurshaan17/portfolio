import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiMongodb, SiRedux, SiWebrtc, SiTypescript, SiFirebase } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { RiFlutterLine } from "react-icons/ri";

function Skills() {
  const skillSet = [
    { skill: "HTML", icon: <FaHtml5 className="text-red-600" size="4em" /> },
    { skill: "CSS", icon: <FaCss3Alt className="text-blue-600" size="4em" /> },
    {
      skill: "JavaScript",
      icon: <FaJsSquare className="text-yellow-600" size="4em" />,
    },{
      skill: "Typescript",
      icon: <SiTypescript className="text-blue-600" size="4em"/>
    },
    { skill: "React", icon: <FaReact className="text-blue-400" size="4em" /> },
    {
      skill: "Tailwind",
      icon: <SiTailwindcss className="text-blue-600" size="4em" />,
    },
    {
      skill: "Node.js",
      icon: <FaNodeJs className="text-green-500" size="4em" />,
    },

    {
      skill: "MongoDB",
      icon: <SiMongodb className="text-green-600" size="4em" />,
    },
    {
      skill: "Go Lang",
      icon: <FaGolang className="text-blue-400" size="4em"/>,
    },
    {
      skill: "Redux",
      icon: <SiRedux className="text-purple-600" size="4em" />,
    },
    {
      skill: "SQL",
      icon: <FaDatabase className="text-blue-500" size="4em" />, 
    },
    {
      skill: "NextJS",
      icon:<TbBrandNextjs className="text-black dark:text-white" size="4em"/>
    },
    {
      skill: "Flutter",
      icon: <RiFlutterLine className="text-blue-600" size="4em" />,
    },
    {
      skill: "Firebase",
      icon: <SiFirebase className="text-yellow-400" size="4em" />,
    },
    {
      skill: "Web RTC",
      icon: <SiWebrtc className="text-black dark:text-white" size="4em"/>

    },
    {
      skill:"Docker",
      icon:<FaDocker className="text-blue-600" size='4em'/>
    },
    {
      skill:"AWS",
      icon:<FaAws className="text-orange-500" size='4em'/>
    }
  ];

  return (
    <div className="container mt-10 mx-auto  sm:p-4 max-w-6xl ">
      <h2 className="text-4xl pb-4 md:text-6xl sm:pl-4 font-prata text-gray-900 dark:text-gray-100 text-center sm:text-left ">
        Skills
      </h2>
      <div className="max-w-4xl mx-auto sm:justify-center sm:align-middle bg-gray-100 dark:bg-gray-900 p-6 rounded-lg dark:shadow-xl">
        <div className="m-4 transform transition duration-500">
          <ul className="list-none flex flex-wrap justify-center">
            {skillSet.map((skillItem, index) => (
              <li
                key={index}
                className="flex flex-col items-center p-4 transition-transform duration-300 hover:scale-110"
              >
                {skillItem.icon}
                <span className="mt-2 text-gray-900 dark:text-gray-200">
                  {skillItem.skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
