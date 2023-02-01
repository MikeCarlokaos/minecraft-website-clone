import React from "react";
import guides from "../../../../data/page/community/guides";
import GuideCard from "../../../common/community/GuideCard";
import heroes from "../../../../assets/page/community/image/townhall/flyingheroes.webp";

const TownHall = () => {
  const GuideGrid = guides.map((guide) => {
    return <GuideCard key={guide.id} {...guide} />;
  });

  return (
    <section className="relative w-full h-full text-center pb-44" id="townhall">
      <div className="w-[1140px] h-full px-[15px] mx-auto">
        <div>
          <h3 className="flex flex-col font-bold text-[28px] leading-[34px] tracking-[1px] mb-[12.8px] pt-[75px]">
            community townhall
          </h3>
          <p className="text-[16px] leading-[24px] px-64 mb-[20.8px]">
            A collection of all the latest happenings from the incredible
            Minecraft Community! Use #FeatureMeMinecraft for a chance to be
            featured!
          </p>
        </div>
        <div className=" w-full h-full pt-[50px] pb-[75px] grid grid-cols-4 gap-[10px] ">
          {GuideGrid}
        </div>
      </div>
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2">
        <img src={heroes} alt="flying heroes" />
      </div>
    </section>
  );
};

export default TownHall;
