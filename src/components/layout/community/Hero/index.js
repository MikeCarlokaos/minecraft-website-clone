import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import bannerBg from "../../../../assets/page/community/image/background/Community_Page-Hero_Bloodface.webp";

const Hero = () => {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 590
        ? setStickyClass("sticky-page-nav")
        : setStickyClass("");
    }
  };

  return (
    <section className="w-full h-full">
      <div
        style={{ backgroundImage: `url(${bannerBg})` }}
        className="relative w-full h-screen bg-cover"
      >
        <div className="absolute top-72 left-1/2 -translate-x-1/2 w-[550px] text-center text-white">
          <h1 className="text-[36px] tracking-[1px] leading-[40px] font-bold">
            welcome to the minecraft community
          </h1>
          <p className="text-[18px] leading-[26px]">
            Our Minecraft community never stops amazing us with their
            creativity. On this page, we gather some of their best work—videos,
            builds, and more.
          </p>
        </div>
      </div>
      <nav className={`w-full h-full bg-white ${stickyClass}`}>
        <ul className="w-full h-[82px] px-24 border-b-2 border-ash-secondary grid grid-cols-6 items-center justify-items-center uppercase text-[12px] leading-[18px] font-bold">
          <li className="navlink h-full w-full flex items-center px-10">
            <HashLink smooth to="/community#news">
              news
            </HashLink>
          </li>

          <li className="navlink h-full w-full flex items-center px-5">
            <HashLink smooth to="/community#townhall">
              town hall
            </HashLink>
          </li>

          <li className="navlink h-full w-full flex items-center px-5">
            <HashLink smooth to="/community#resources">
              for new player
            </HashLink>
          </li>

          <li className="navlink h-full w-full flex items-center px-5">
            <HashLink smooth to="/community#stream">
              youtube
            </HashLink>
          </li>

          <li className="navlink h-full w-full flex items-center px-5">
            <HashLink smooth to="/community#discussion">
              discussion & help
            </HashLink>
          </li>

          <li className="navlink h-full w-full flex items-center px-5">
            <HashLink smooth to="/community#feedback">
              feedback
            </HashLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Hero;
