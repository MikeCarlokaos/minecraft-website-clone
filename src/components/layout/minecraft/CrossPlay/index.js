import React from "react";
import bg from "../../../../assets/page/minecraft/images/cross-play.webp";

const CrossPlay = () => {
  return (
    <section className="w-full h-full text-center bg-ash pt-5">
      <div className="w-full h-full mx-auto p-5 object-center md:w-[1140px]">
        <img src={bg} alt="cross play" className="w-full" />
      </div>
      <div className="w-full h-full pb-16">
        <h3 className="text-[28px] leading-[34px] tracking-[1px] font-bold mb-3">
          play the way you want
        </h3>
        <p>
          Playing Minecraft on your favorite devices is so easy! And so fun!
        </p>
      </div>
      <div className="w-full text-[12px] py-5 bg-white">
        * Offer available for new subscribers only.
      </div>
    </section>
  );
};

export default CrossPlay;
