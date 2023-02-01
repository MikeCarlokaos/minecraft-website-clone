import React from "react";
import transTop from "../../../../assets/page/minecraftDungeons/image/background/MCD-trans-top.webp";
import bgHero from "../../../../assets/page/minecraftDungeons/image/background/hero-bg.webp";

const Hero = () => {
  return (
    <section className="w-full h-full bg-white">
      <div
        style={{ backgroundImage: `url(${transTop})` }}
        className="bg-no-repeat bg-contain w-full h-[125px]"
      ></div>
      <div className="w-full h-screen px-20 pb-16">
        <img
          src={bgHero}
          alt="MD Seasonal Adventures"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
