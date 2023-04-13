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
        As a recent BTECH in ECE graduate from SRM, I have a strong passion for web development and have taken various steps to enhance my knowledge and skills in this field. I have completed several online courses, personal projects, and an internship to gain hands-on experience in full-stack development.
        </p>

        <br />

        <p className="text-xl">
        Throughout my learning journey, I have worked with various technologies such as Express.js, React.js, and Node.js to build full-stack web applications. I am proficient in implementing CRUD operations, using Git for version control, and have experience with RESTful APIs. My in-depth knowledge and understanding of JavaScript and React are my strongholds, and I am confident in my ability to apply this knowledge to any project.        
        </p>

        <br />

         <p className="text-xl">
         I am not only proficient in technical skills but also possess qualities that make me a valuable team player. I am a quick learner, excellent communicator, and open to constructive criticism and feedback to improve my work. I am always eager to learn new technologies and techniques to enhance my development skills and stay up-to-date with the latest trends in web development.         
         </p>

         <br />

         <p className="text-xl">
         In addition to my personal projects, I have also contributed to open source projects, which have further expanded my technical expertise. My dedication and experience make me a strong candidate for any full-stack web development role.         
         </p>

      </div>
    </div>
  );
};

export default About;
