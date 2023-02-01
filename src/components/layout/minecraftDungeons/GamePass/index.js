import React from "react";

const GamePass = () => {
  return (
    <section className="w-full h-full text-white flex flex-col items-center pt-20 bg-black">
      <div className="text-center pb-20">
        <h3 className="text-[28px] leading-[34px] tracking-[1px] font-bold">
          play minecraft games with game pass
        </h3>
        <p className="text-[16px] leading-[24px] mt-3 mb-16">
          Get your first month for 1$*
        </p>
        <a
          href="blank"
          className="w-36 bg-dark-green py-3 px-7 whitespace-nowrap shadow-base-button uppercase font-bold hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-secondary"
        >
          join now
        </a>
      </div>

      <div className="w-full h-full bg-white">
        <p className="text-black italic py-5 text-center text-[12px]">
          * Offer available for new subscribers only.
        </p>
      </div>
    </section>
  );
};

export default GamePass;
