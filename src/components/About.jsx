import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 pt-20 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
        I am an India based Btech ECE undergrad who specializes on incubating amazing webapps.
        I am a self learner and I am addicted to read blogs on newest technologies.
        I also like to do Programming and technical stuffs. 
        I am a Fullstack developer.
        </p>

        <br />

        <p className="text-xl">
        I love to work in an organization where culture of freedom and working for 
        initiatives is ensured, facilitating my contribution through thoughts 
        and action to the company's vision and thus achieve self development by 
        playing a significant role in building the organization.

        </p>
      </div>
    </div>
  );
};

export default About;
