import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import SocialLinks from "../global/social-links";
import { NAV_ITEMS } from "./constant";

interface MobileNavProps {
  nav: boolean;
  handleNav: () => void;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({ nav, handleNav, setNav }: MobileNavProps) => {
  return (
    <div>
      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-full sm:w-[65%] md:w-[45%]  h-screen bg-[#ecf0f3] p-10 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-75"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Lets build something together
              </p>
            </div>
          </div>
          <div>
            <ul className="py-4 flex flex-col">
              {NAV_ITEMS.map((item, index) => (
                <Link key={index} href={item.path}>
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm uppercase hover:border-b"
                  >
                    {item.lable}
                  </li>
                </Link>
              ))}
            </ul>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
