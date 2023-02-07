import React from "react";
import bgDark from "../../../../assets/images/background/bg-wool-dark.png";
import communityGrids from "../../../../data/layout/communityGrid";
import CommunityGridCard from "../../../common/home/CommunityGridCard";
import arrowLink from "../../../../assets/icons/link-arrow.svg";
import { useState } from "react";

const CommunityCreations = () => {
  const [loadGrid, setLoadGrid] = useState(false);

  const CommunityGrid = communityGrids.map((grid) => {
    return <CommunityGridCard key={grid.id} {...grid} loadGrid={loadGrid} />;
  });

  const toggleGrid = () => {
    setLoadGrid(!loadGrid);
  };

  return (
    <section className="bg-white w-full h-full text-center">
      <div
        style={{ backgroundImage: `url(${bgDark})` }}
        className="h-[100px] w-full"
      ></div>
      <div className="w-full h-full md:w-[1140px] md:px-[15px] md:mx-auto">
        <div>
          <h3 className="flex flex-col font-bold text-[28px] leading-[34px] tracking-[1px] mb-[12.8px] pt-[75px]">
            Community Creations
          </h3>
          <p className="text-[16px] leading-[24px] mb-[20.8px] md:px-64">
            Discover the best add-ons, mods, and more being built by the
            incredible Minecraft community!
          </p>
          <div className="w-full flex justify-center">
            <a
              href="blank"
              className="w-28 text-text-green font-bold uppercase flex items-center"
            >
              <img
                src={arrowLink}
                alt="arrow"
                className="w-[15px] h-[15px] mr-2"
              />
              Explore
            </a>
          </div>
        </div>
        <div className=" w-full h-full pt-[50px] pb-[75px] grid grid-cols-1 justify-items-center gap-[10px] md:grid-cols-4">
          {CommunityGrid}
        </div>
        <button
          className="h-[50px] bg-dark-green font-bold text-lg text-white py-[15px] px-6 tracking-[0.54px] leading-5 mb-[48px] shadow-base-button hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-secondary"
          onClick={toggleGrid}
        >
          Load More
        </button>
        <div className="pb-8 px-32 text-[16px] leading-[24px] italic">
          <p>
            Cross-platform play available on Xbox, PlayStation 4, Nintendo
            Switch , IOS, Android, and Windows. Cross-play requires Microsoft
            account. Xbox Live Gold required for online multiplayer on Xbox.
            PlayStation Plus Membership requires for online multiplayer on
            PlayStation 4. Nintendo Switch Online membership required for online
            multiplayer on Nintendo Switch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityCreations;
