import Image from "next/image";
import React from "react";
import { SKILLS_LIST } from "./constants";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 flex items-center">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full lg:w-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2> what I Can do</h2>
        <div className="grid md:grid-colis-2 lg:grid-cols-4 gap-8">
          {SKILLS_LIST.map((item, i) => (
            <div
              key={i}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 "
            >
              <div className="grid grid-cols02 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={item.path}
                    alt="skills image"
                    // className="w-[64-x] h-[64px]"
                    width={64}
                    height={64}
                  />
                </div>
                <div>
                  <h3>{item.lable}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
