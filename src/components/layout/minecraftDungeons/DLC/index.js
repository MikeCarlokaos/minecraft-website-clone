import React from "react";
import dlc from "../../../../data/page/minecraftDungeons/dlc";
import DLCCard from "../../../common/minecraftDungeons/DLCCard";

const DLC = () => {
  const DLCSelection = dlc.map((content) => {
    return <DLCCard key={content.id} {...content} />;
  });

  return (
    <section className="w-full h-full px-20 py-28 bg-orange-secondary">
      <div className="w-full h-full flex flex-col items-center mb-10">
        <h3 className="text-[28px] tracking-[1px] leading-[34px] font-bold mb-4">
          dlc for minecraft dungeons
        </h3>
        <p className="w-[560px] text-center text-[16px]">
          Venture deeper into Minecraft Dungeons with downloadable content!
          Challenge yourself and your crew with new missions, mobs, gear, and
          more!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-7 gap-y-16 py-5">{DLCSelection}</div>
    </section>
  );
};

export default DLC;
