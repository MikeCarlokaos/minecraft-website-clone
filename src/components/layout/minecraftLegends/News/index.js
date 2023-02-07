import React from "react";
import { useState } from "react";
import news from "../../../../data/page/minecraftLegends/news";
import NewsCard from "../../../common/minecraftLegends/NewsCard";
import transBottom from "../../../../assets/page/minecraftLegends/images/background/MC-Legends_Glow-Transition_Bottom.jpg";

const News = () => {
  const [loadGrid, setLoadGrid] = useState(false);

  const NewsGrid = news.map((grid) => {
    return <NewsCard key={grid.id} {...grid} loadGrid={loadGrid} />;
  });

  const toggleGrid = () => {
    setLoadGrid(!loadGrid);
  };

  return (
    <section className="bg-white w-full h-full text-center bg-blue-tertiary">
      <div className="w-full md:w-[1140px] h-full px-[15px] py-10 mx-auto">
        <div>
          <h3 className="flex flex-col font-bold text-[28px] leading-[34px] tracking-[1px] text-white mb-[12.8px] pt-[75px]">
            minecraft legends news
          </h3>
        </div>
        <div className=" w-full h-full pt-[50px] pb-[75px] grid grid-cols-1 gap-y-4 justify-items-center md:grid-cols-4 md:gap-[10px] ">
          {NewsGrid}
        </div>
        <button
          className="h-[50px] bg-dark-green font-bold text-lg text-white py-[15px] px-6 tracking-[0.54px] leading-5 mb-[48px] shadow-base-button hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-secondary"
          onClick={toggleGrid}
        >
          Load More
        </button>
      </div>
      <div
        style={{ backgroundImage: `url(${transBottom})` }}
        className="w-full h-[140px] bg-cover"
      ></div>
    </section>
  );
};

export default News;
