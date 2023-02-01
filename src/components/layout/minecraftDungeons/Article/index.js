import React from "react";
import articles from "../../../../data/page/minecraftDungeons/articles";
import ArticleCard from "../../../common/minecraftDungeons/ArticleCard";

const Article = () => {
  const ArticleSection = articles.map((snip) => {
    return <ArticleCard key={snip.id} {...snip} />;
  });

  return (
    <section className="w-full h-full bg-white">
      <div className="w-full h-full flex flex-col items-center mb-10">
        <h3 className="text-[28px] tracking-[1px] leading-[34px] font-bold mb-4">
          the adventure continues!
        </h3>
        <p className="w-[560px] text-center text-[16px]">
          The journey continues as Seasonal Adventures—free, themed events—up
          the ante in Minecraft Dungeons. Join weekly challenges to earn
          Adventure Points and work towards unlocking exclusive rewards, through
          an all-new progression system.
        </p>
      </div>
      <div className="w-full h-full">{ArticleSection}</div>
    </section>
  );
};

export default Article;
