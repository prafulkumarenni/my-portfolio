import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div>
      <div className="pt-40">
        <p className=" uppercase tracking-widest text-[#5651e5]">
          Lets Connect
        </p>
        <div className="flex items-center justify-between my-4 w-full md:w-[25%] m-auto lg:justify-between sm:px-3">
          <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-[#5651e5]">
            <FaLinkedinIn />
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-[#5651e5]">
            <FaLinkedinIn />
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-[#5651e5]">
            <FaLinkedinIn />
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-[#5651e5]">
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
