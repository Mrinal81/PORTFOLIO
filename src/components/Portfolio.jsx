import React from "react";
import portfolio from "../assets/portfolio.jpg";
// import installNode from "../assets/installNode.jpg";
import crypto from "../assets/crypto.jpg";
import memehub from "../assets/work-in-progress.jpg";
// import food_nation from "../assets/zomato.jpg";
import todo from "../assets/todo.jpg";
import image from "../assets/image.jpg"
import reading from "../assets/Reading-list.jpg";

const Portfolio = () => {
  


  const portfolios = [
    {
      id: 1,
      src: memehub,
      demolink: "",
      codelink: "https://github.com/Mrinal81/MEMEHUB",
    },
    {
      id: 2,
      src: portfolio,
      demolink: "",
      codelink: "https://github.com/Mrinal81/PORTFOLIO.git",
    },
    {
      id: 3,
      src: crypto,
      demolink: "https://mrinalcryptoreactwebsite.netlify.app/",
      codelink: "https://github.com/Mrinal81/React-Cryptocurrency-App",
    },
    {
      id: 4 ,
      src: todo,
      demolink: "https://mrinal-to-do-listwebsite.netlify.app/",
      codelink: "https://github.com/Mrinal81/To-do-list",
    },
    {
      id: 5,
      src: image,
      demolink: "https://mrinalimageprocessing.netlify.app/",
      codelink: "https://github.com/Mrinal81/API-IMAGE-PROCESSING",
    },
    {
      id: 5,
      src: reading,
      demolink: "https://mrinal-reading-list.netlify.app/",
      codelink: "https://github.com/Mrinal81/reading-list",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 pt-20 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demolink, codelink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demolink} target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={codelink} target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
