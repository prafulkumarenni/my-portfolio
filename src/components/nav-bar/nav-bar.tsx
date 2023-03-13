import React, { useState, useEffect } from "react";

import MobileNav from "./mobile-nav";
import DesktopNav from "./destop-nav";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 w-full h-20 shadow-xl z-[100] bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <h1 className="text-[#ecf0f3] ">Praful Kumar Enni</h1>
        <DesktopNav handleNav={handleNav} />
      </div>
      <MobileNav nav={nav} handleNav={handleNav} />
    </div>
  );
};

export default Navbar;
