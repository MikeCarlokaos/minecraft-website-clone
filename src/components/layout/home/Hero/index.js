import React from "react";
import bgHero from "../../../../assets/images/background/home-hero.webp";

const Hero = () => {
  return (
    <section>
      <div className="w-full h-screen bg-no-repeat bg-cover text-white bg-black">
        <div
          style={{ backgroundImage: `url(${bgHero})` }}
          className="relative h-full bg-no-repeat bg-cover px-5 md:mx-[31.667px] md:px-0"
        >
          <div className="w-full h-full flex flex-col items-center text-center pt-32 md:absolute md:top-0 md:left-0 md:mt-[100px] md:ml-[100px] md:w-[540px] md:block">
            <h1 className="text-4xl font-bold mb-2.5">
              Welcome to the official site of Minecraft
            </h1>
            <p className="text-lg mb-[50px]">
              With new games, new updates, and new ways to play, join one of the
              biggest communities in gaming and start crafting today!
            </p>

            <a
              href="blank"
              className=" block w-56 py-3 navlink bg-dark-green font-bold shadow-base-button uppercase whitespace-nowrap hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-secondary md:w-1/2 md:text-[19.2px] md:py-[22px] md:px-[52px] md:tracking-[1px] md:leading-[28.8px]"
            >
              Get Minecraft
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
