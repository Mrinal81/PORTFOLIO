import React from "react";
import portfolio from "../assets/portfolio.jpg";
// import installNode from "../assets/installNode.jpg";
import crypto from "../assets/crypto.jpg";
import memehub from "../assets/blog.jpg";
import food_nation from "../assets/zomato.jpg";
import todo from "../assets/todo.jpg";

const Portfolio = () => {
  


  const portfolios = [
    {
      id: 1,
      src: portfolio,
      demolink: "https://mrinal561.netlify.app/",
      codelink: "https://github.com/Mrinal81/PORTFOLIO.git",
    },
    {
      id: 2,
      src: memehub,
      demolink: "",
      codelink: "https://github.com/Mrinal81/MEMEHUB.git",
    },
    {
      id: 3,
      src: crypto,
      demolink: "",
      codelink: "https://github.com/Mrinal81/React-Cryptocurrency-App.git",
    },
    {
      id: 4 ,
      src: todo,
      demolink: "",
      codelink: "https://github.com/Mrinal81/To-do-list.git",
    },
    {
      id: 5,
      src: food_nation,
      demolink: "",
      codelink: "https://github.com/Mrinal81/FOOD_NATION.git",
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
