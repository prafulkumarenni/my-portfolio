import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import NameImage from "../../../public/Praful Kumar.png";
import SocialLinks from "../global/social-links";
import MobileNav from "./mobile-nav";
import DestopNav from "./destop-nav";
import { NAV_ITEMS } from "./constant";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // NOT WORKING
  useEffect(() => {
    const handleShadow = () => {
      if (window.scroll >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, [setShadow]);

  return (
    <div
      className={
        (shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]",
        "bg-gradient-to-r from-[#5651e5] to-[#709dff]")
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <h1 className="text-[#ecf0f3] ">Praful Kumar Enni</h1>
        <DestopNav handleNav={handleNav} />
      </div>
      <MobileNav nav={nav} handleNav={handleNav} />
    </div>
  );
};

export default Navbar;
