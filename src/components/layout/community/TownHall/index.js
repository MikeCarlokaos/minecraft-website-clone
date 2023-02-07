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
      <div className="w-full h-full px-[15px] md:w-[1140px] md:mx-auto">
        <div>
          <h3 className="flex flex-col font-bold text-[28px] leading-[34px] tracking-[1px] mb-[12.8px] pt-[75px]">
            community townhall
          </h3>
          <p className="text-[16px] leading-[24px] px-6 mb-[20.8px] md:px-64">
            A collection of all the latest happenings from the incredible
            Minecraft Community! Use #FeatureMeMinecraft for a chance to be
            featured!
          </p>
        </div>
        <div className=" w-full h-full pt-[50px] pb-[75px] grid grid-cols-1 justify-items-center gap-[10px] md:grid-cols-4">
          {GuideGrid}
        </div>
      </div>
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2">
        <img
          src={heroes}
          alt="flying heroes"
          className="w-full h-60 md:h-full"
        />
      </div>
    </section>
  );
};

export default TownHall;
