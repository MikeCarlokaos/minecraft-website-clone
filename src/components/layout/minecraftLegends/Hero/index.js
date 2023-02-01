import React from "react";
import bgHero from "../../../../assets/page/minecraftLegends/images/background/MC-Legends_Page-Hero.jpg";

const Hero = () => {
  return (
    <section className="w-full h-full bg-black">
      <div
        style={{ backgroundImage: `url(${bgHero})` }}
        className="relative w-full h-screen bg-center bg-cover"
      >
        <a
          href="blank"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center px-5 py-4 w-56 bg-light-blue uppercase font-bold border-b-4 border-blue-primary before:content-[''] before:absolute before:bottom-1/2 before:translate-y-1/2 before:w-3 before:h-8 before:-left-3 before:bg-light-blue before:border-b-4 before:border-blue-primary after:absolute after:bottom-1/2 after:translate-y-1/2 after:w-3 after:h-8 after:-right-3 after:bg-light-blue after:border-b-4 after:border-blue-primary hover:bg-gradient-to-b from-light-gray to-pearl-white hover:border-transparent before:hover:bg-gradient-to-b from-light-gray to-pearl-white before:hover:text-black hover:shadow-hover-button-primary before:hover:border-white after:hover:bg-gradient-to-b from-light-gray to-pearl-white after:hover:text-black hover:shadow-hover-button-primary after:hover:border-white"
        >
          watch the trailer
        </a>
      </div>
      <div className="w-full h-full flex justify-center text-center text-white  py-16">
        <div className="w-[580px]">
          <h3 className="text-[28px] tracking-[1px] leading-[34px] font-bold mb-5">
            unite the overworld
          </h3>
          <p className="text-[16px]">
            Discover the mysteries of Minecraft Legends, a new action strategy
            game. Lead your allies in heroic battles to defend the Overworld
            from the destructive piglins.
          </p>
          <h5 className="text-[18px] tracking-[1px] font-bold pt-10">
            coming spring 2023
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Hero;
