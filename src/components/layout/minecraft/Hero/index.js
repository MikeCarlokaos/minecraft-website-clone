import React from "react";
import bgHero from "../../../../assets/page/minecraft/images/MC-Wild-Update-Hero.jpg";

const Hero = () => {
  return (
    <section className="h-full w-full">
      <nav className="w-full bg-white">
        <ul className="w-full flex justify-center px-[12px] py-[24px] space-x-20 text-text-green font-bold text-[10px]">
          <li>
            <a
              href="blank"
              className="px-[12px] py-[8px] uppercase hover:bg-nav-green hover:text-white"
            >
              realms
            </a>
          </li>
          <li>
            <a
              href="blank"
              className="px-[12px] py-[8px] uppercase hover:bg-nav-green hover:text-white"
            >
              servers
            </a>
          </li>
          <li>
            <a
              href="blank"
              className="px-[12px] py-[8px] uppercase hover:bg-nav-green hover:text-white"
            >
              marketplace
            </a>
          </li>
          <li>
            <a
              href="blank"
              className="px-[12px] py-[8px] uppercase hover:bg-nav-green hover:text-white"
            >
              try it free
            </a>
          </li>
        </ul>
      </nav>
      <div className="h-screen w-full">
        <div
          style={{ backgroundImage: `url(${bgHero})` }}
          className="h-full w-full bg-no-repeat bg-cover bg-center"
        ></div>
      </div>
    </section>
  );
};

export default Hero;
