import Image from "next/image";
import React from "react";
import { BsBracesAsterisk } from "react-icons/bs";
import { SUMMARY_ITEMS } from "./constants";

const About = () => {
  return (
    <div id="about" className="w-full lg:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2>Summary of Experience</h2>
          {SUMMARY_ITEMS.map((item, i) => (
            <span key={i} className="flex py-2">
              <span className="text-[#5651e5] px-3 py-2">
                <BsBracesAsterisk />
              </span>
              <p className="text-gray-600">{item.value}</p>
            </span>
          ))}
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl w-[600px] h=[400px]"
            src="/static/about-image.jpg"
            alt="About Image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
