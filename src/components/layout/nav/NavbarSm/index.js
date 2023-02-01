import React, { useState, useEffect } from "react";
import navlinkIcon from "../../../../assets/icons/navlinkGreen.png";
import navLogo from "../../../../assets/images/logo/logo-minecraft.svg";
import icon1 from "../../../../assets/icons/game/mc-app-icon.webp";
import icon2 from "../../../../assets/icons/game/mcd-app-icon.webp";
import icon3 from "../../../../assets/icons/game/mcl-app-icon.webp";
import icon4 from "../../../../assets/icons/game/mce-app-icon.jpg";
import open from "../../../../assets/icons/hamburger-icon.webp";
import close from "../../../../assets/icons/hamburger-icon-close.png";

const NavbarSm = ({ className, text }) => {
  const [stickyClass, setStickyClass] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 36 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav
      className={`${stickyClass} relative w-full h-[80px] bg-dark-gray text-white  uppercase flex flex-col pl-[42px] pr-[50px] md:hidden`}
    >
      <div className="relative w-full flex justify-center items-center py-4">
        <a href="/">
          <img src={navLogo} alt="Minecraft Logo" className="w-60 h-12" />
        </a>
        <div>
          <button className="absolute -left-2 top-5" onClick={handleMenu}>
            <img
              src={openMenu ? open : close}
              alt="hamburger"
              className="w-10 h-10"
            />
          </button>
        </div>
      </div>
      <div
        className={`absolute -bottom-[450px] left-0 z-10 h-[450px] w-full bg-gray-900 ${
          openMenu ? "hidden" : ""
        }`}
      >
        <ul className="h-full flex flex-col text-xs font-bold divide-y">
          <li className="w-full h-full flex items-center px-[13px] py-3">
            <h5 className=" w-full h-full text-white">Games</h5>
          </li>
          <li className="py-3 px-4 text-light-green hover:bg-light-green hover:text-black">
            <a href="/minecraft" className="flex">
              <img src={icon1} alt="minecraft" className="mr-2" />
              Minecraft
            </a>
          </li>
          <li className="py-3 px-4 text-light-green hover:bg-light-green hover:text-black">
            <a href="/minecraft-dungeons" className="flex">
              <img src={icon2} alt="minecraft dungeons" className="mr-2" />
              Minecraft Dungeons
            </a>
          </li>
          <li className="py-3 px-4 text-light-green hover:bg-light-green hover:text-black">
            <a href="minecraft-legends" className="flex">
              <img src={icon3} alt="minecraft legends" className="mr-2" />
              Minecraft Legends
            </a>
          </li>
          <li className="py-3 px-4 text-light-green hover:bg-light-green hover:text-black">
            <a href="education" className="flex">
              <img src={icon4} alt="minecraft education" className="mr-2" />
              Minecraft: Education Edition
            </a>
          </li>
          <li className="h-full px-[13px] py-3">
            <a
              href="community"
              className="h-full flex items-center  hover:text-light-green"
            >
              Community
            </a>
          </li>
          <li className="h-full group px-[13px] py-3">
            <a
              href="blank"
              className="flex h-full items-center group-hover:text-light-green"
            >
              Merch
              <img
                src={navlinkIcon}
                alt="NavLink Icon"
                className=" w-auto brightness-200 invert-0 m-0 pl-2 group-hover:filter-none"
              />
            </a>
          </li>
          <li className="h-full group px-[13px] py-3">
            <a
              href="blank"
              className="flex h-full items-center group-hover:text-light-green"
            >
              Support
              <img
                src={navlinkIcon}
                alt="NavLink Icon"
                className=" w-auto brightness-200 invert-0 m-0 pl-2 group-hover:filter-none"
              />
            </a>
          </li>
          <li className="h-full px-[13px] py-3">
            <a
              href="login"
              className="h-full flex items-center  hover:text-light-green"
            >
              Login
            </a>
          </li>
          <li className="h-full px-[13px] py-3">
            <a
              href="redeem"
              className="h-full flex items-center  hover:text-light-green"
            >
              Redeem
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarSm;
