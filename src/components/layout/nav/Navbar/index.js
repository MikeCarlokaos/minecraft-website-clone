import React, { useState, useEffect } from "react";
import arrowDowm from "../../../../assets/icons/downArrow.png";
import arrowUp from "../../../../assets/icons/upArrow.png";
import navlinkIcon from "../../../../assets/icons/navlinkGreen.png";
import navLogo from "../../../../assets/images/logo/logo-minecraft.svg";
import icon1 from "../../../../assets/icons/game/mc-app-icon.webp";
import icon2 from "../../../../assets/icons/game/mcd-app-icon.webp";
import icon3 from "../../../../assets/icons/game/mcl-app-icon.webp";
import icon4 from "../../../../assets/icons/game/mce-app-icon.jpg";

const Navbar = ({ className, text }) => {
  const [stickyClass, setStickyClass] = useState("");

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

  return (
    <nav
      className={`${stickyClass}hidden w-full h-[83px] bg-dark-gray text-white items-center uppercase  justify-between pl-[42px] pr-[50px] md:flex`}
    >
      <div className="h-full w-[40%]">
        <ul className="h-full flex text-xs font-bold">
          <li className="relative group w-[89px] h-full flex items-center px-[13px]">
            <button className="relative group w-full h-full">
              <span
                style={{ backgroundImage: `url(${arrowDowm})` }}
                className="absolute bottom-[2.10rem] left-0 right-0 bg-no-repeat peer bg-right pr-[16px] transition-all duration-700 ease-in-out group-hover:hidden"
              >
                Games
              </span>
              <span
                style={{ backgroundImage: `url(${arrowUp})` }}
                className="absolute hidden bottom-[2.10rem] left-0 right-0 bg-no-repeat peer bg-right pr-[16px] transition-all duration-700 ease-in-out text-light-green group-hover:block"
              >
                Games
              </span>
            </button>
            <ul className="absolute hidden top-16 left-2 z-10 w-72 h-[172px] flex bg-black divide-y-[1px] divide-gray-700 transition-all duration-700 group-hover:block ">
              <li className="p-3 text-light-green hover:bg-light-green hover:text-black">
                <a href="/minecraft" className="flex">
                  <img src={icon1} alt="minecraft" className="mr-2" />
                  Minecraft
                </a>
              </li>
              <li className="p-3 text-light-green hover:bg-light-green hover:text-black">
                <a href="/minecraft-dungeons" className="flex">
                  <img src={icon2} alt="minecraft dungeons" className="mr-2" />
                  Minecraft Dungeons
                </a>
              </li>
              <li className="p-3 text-light-green hover:bg-light-green hover:text-black">
                <a href="minecraft-legends" className="flex">
                  <img src={icon3} alt="minecraft legends" className="mr-2" />
                  Minecraft Legends
                </a>
              </li>
              <li className="p-3 text-light-green hover:bg-light-green hover:text-black">
                <a href="education" className="flex">
                  <img src={icon4} alt="minecraft education" className="mr-2" />
                  Minecraft: Education Edition
                </a>
              </li>
            </ul>
          </li>
          <li className="h-full px-[13px] ">
            <a
              href="community"
              className="h-full flex items-center  hover:text-light-green"
            >
              Community
            </a>
          </li>
          <li className="h-full group px-[13px] ">
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
          <li className="h-full group px-[13px] ">
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
        </ul>
      </div>
      <div>
        <a href="/">
          <img src={navLogo} alt="Minecraft Logo" className="h-12 w-60" />
        </a>
      </div>

      <ul className="h-full w-[40%] flex justify-end ">
        <li className="h-full flex items-center ml-2.5">
          <a
            href="blank"
            className={`${className} h-[50px] font-bold text-lg py-[15px] px-6 tracking-[0.54px] leading-5 whitespace-nowrap hover:bg-gradient-to-b from-light-gray to-pearl-white hover:text-black hover:shadow-hover-button-primary`}
          >
            {text}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
