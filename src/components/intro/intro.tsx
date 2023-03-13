import React from "react";
import SocialLinks from "../global/social-links";

const Intro = () => {
  return (
    <div id="intro" className="  mt-2 w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Lets Build Something togerther
          </p>
          <h1>
            Hi, I'm <span className="text-[#5651e5]"> Praful </span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-end Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Highly skilled and experienced professional with 8 years of hands on
            experience in the development of web and mobile applications using
            HTML/ HTML5, Javascript, Typescript, Reactjs, React-Native, Redux,
            NodeJs, Express.js, Babel, Graphql, Restful API’s, webpack and git.
            Proven ability to develop efficient, scalable and robust web and
            mobile applications while adhering to industry best practices and
            standards. Strong experience in the entire software development
            lifecycle, from requirement gathering to design development,
            testing, deployment and maintenance.
          </p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Intro;
