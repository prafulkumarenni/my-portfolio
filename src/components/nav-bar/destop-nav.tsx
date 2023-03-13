import Link from "next/link";
import React from "react";
import { NAV_ITEMS } from "./constant";
import { AiOutlineMenu } from "react-icons/ai";

interface DesktopNavProps {
  handleNav: () => void;
}

const DesktopNav = ({ handleNav }: DesktopNavProps) => {
  return (
    <div>
      <ul className=" hidden md:flex">
        {NAV_ITEMS.map((item, index) => (
          <Link key={index} href={item.path}>
            <li className="ml-10 text-sm uppercase hover:border-b">
              {item.lable}
            </li>
          </Link>
        ))}
      </ul>
      <div onClick={handleNav} className="md:hidden">
        <AiOutlineMenu size={25} />
      </div>
    </div>
  );
};

export default DesktopNav;
