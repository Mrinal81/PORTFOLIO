import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import java from "../assets/java.png";
import c from "../assets/c++.png";
import github from "../assets/github.png";
import bootstrap from "../assets/bootstrap.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import sql from "../assets/SQL.png";
import mongoDB from "../assets/mongoDB.png";
import tailwind from "../assets/tailwind.png";
import linux from "../assets/linux.png";
import materialUI from "../assets/material_ui.png";
import redux from "../assets/redux.png";





const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: materialUI,
      title: "Material UI",
      style: "shadow-sky-600",
    },
    {
      id: 7,
      src: redux,
      title: "Redux",
      style: "shadow-purple-400",
    },
    {
      id: 8,
      src: express,
      title: "Express",
      style: "shadow-green-400",
    },
    {
      id: 9,
      src: c,
      title: "C++",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      src: node,
      title: "Node",
      style: "shadow-green-600",
    },
    {
      id: 11,
      src: java,
      title: "Java",
      style: "shadow-red-600",
    },
    {
      id: 12,
      src: sql,
      title: "SQL",
      style: "shadow-orange-400",
    },
    {
      id: 13,
      src: mongoDB,
      title: "mongoDB",
      style: "shadow-green-300",
    },
    {
      id: 14,
      src: github,
      title: "Github",
      style: "shadow-white",
    },
    {
      id: 15,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-600",
    },
    {
      id: 16,
      src: linux,
      title: "Linux",
      style: "shadow-yellow-600",
    },
    
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="max-w-screen-lg mx-auto p-4 pt-20 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500  inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
