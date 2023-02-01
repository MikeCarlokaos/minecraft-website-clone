import React from "react";
import news from "../../../../data/page/minecraftDungeons/news";
import NewsCard from "../../../common/minecraftDungeons/NewsCard";
import { useState } from "react";

const News = () => {
  const [loadGrid, setLoadGrid] = useState(false);

  const NewsGrid = news.map((grid) => {
    return <NewsCard key={grid.id} {...grid} loadGrid={loadGrid} />;
  });

  const toggleGrid = () => {
    setLoadGrid(!loadGrid);
  };

  return (
    <section className="bg-white w-full h-full text-center bg-red-violet">
      <div className="w-[1140px] h-full px-[15px] mx-auto">
        <div>
          <h3 className="flex flex-col font-bold text-[28px] leading-[34px] tracking-[1px] mb-[12.8px] pt-[75px]">
            minecraft dungeons news
          </h3>
        </div>
        <div className=" w-full h-full pt-[50px] pb-[75px] grid grid-cols-4 gap-[10px] ">
          {NewsGrid}
        </div>
        <button
          className="h-[50px] bg-dark-green font-bold text-lg text-white py-[15px] px-6 tracking-[0.54px] leading-5 mb-[48px] shadow-base-button hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-secondary"
          onClick={toggleGrid}
        >
          Load More
        </button>
      </div>
    </section>
  );
};

export default News;
