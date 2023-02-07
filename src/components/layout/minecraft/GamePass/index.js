import React from "react";
import bgGamePass from "../../../../assets/page/minecraft/images/game-pass.webp";

const GamePass = () => {
  return (
    <section className="w-full h-full text-center bg-base-gray pt-[100px] pb-[70px]">
      <div className="w-full my-[16px] mx-auto px-[15px] md:w-[1140px]">
        <div>
          <img src={bgGamePass} alt="Game Pass" className="" />
        </div>
      </div>
      <div className="text-white">
        <h3 className="text-[28px] leading-[34px] tracking-[1px] font-bold">
          play minecraft games with game pass
        </h3>
        <p className="text-[16px] leading-[24px] mt-3 mb-16">
          Get your first month for 1$*
        </p>
        <a
          href="blank"
          className="bg-dark-green py-3 px-7 shadow-base-button uppercase font-bold hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-secondary"
        >
          join now
        </a>
      </div>
    </section>
  );
};

export default GamePass;
