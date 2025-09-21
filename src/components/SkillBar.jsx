import React from "react";
import JS from "../assets/Js.svg";
import ReactLogo from "../assets/react.svg";
import Tailwind from "../assets/Tailwind CSS.svg";
import HTML from "../assets/HTML5.svg";
import CSS from "../assets/CSS3.svg";
import Node from "../assets/Node.js.svg";
import Mongo from "../assets/MongoDB.svg";
import Vite from "../assets/Vite.js.svg";
import Bootstrap from "../assets/Bootstrap.svg";

const skills = [
  { icon: JS, name: "JavaScript" },
  { icon: ReactLogo, name: "React" },
  { icon: Tailwind, name: "Tailwind" },
  { icon: HTML, name: "HTML5" },
  { icon: CSS, name: "CSS3" },
  { icon: Node, name: "Node.js" },
  { icon: Mongo, name: "MongoDB" },
  { icon: Bootstrap, name: "Bootstrap 5" },
  { icon: Vite, name: "Vite" },
];

export default function SkillBar() {
  const repeatedSkills = [...skills, ...skills];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My Skills
      </h2>

      <div className="overflow-hidden w-1/2 mx-auto">
        <div className="flex whitespace-nowrap animate-marquee">
          {repeatedSkills.map((skill, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-center justify-center px-6 hover:scale-125 hover:shadow-lg  hover:shadow-white transition-transform duration-300"
              title={skill.name}
            >
              <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-flex;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
