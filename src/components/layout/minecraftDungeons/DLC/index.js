import React from "react";
import dlc from "../../../../data/page/minecraftDungeons/dlc";
import DLCCard from "../../../common/minecraftDungeons/DLCCard";

const DLC = () => {
  const DLCSelection = dlc.map((content) => {
    return <DLCCard key={content.id} {...content} />;
  });

  return (
    <section className="w-full h-full px-5 py-6 text-center bg-orange-secondary md:px-20 md:py-28 md:text-start">
      <div className="w-full h-full flex flex-col items-center mb-10">
        <h3 className="text-[28px] tracking-[1px] leading-[34px] font-bold mb-4">
          dlc for minecraft dungeons
        </h3>
        <p className="w-full text-center text-[16px] md:w-[560px]">
          Venture deeper into Minecraft Dungeons with downloadable content!
          Challenge yourself and your crew with new missions, mobs, gear, and
          more!
        </p>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-y-12 py-5 md:grid-cols-3 md:gap-7 md:gap-y-16 md:justify-items-start">
        {DLCSelection}
      </div>
    </section>
  );
};

export default DLC;
