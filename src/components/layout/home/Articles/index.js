import React from "react";
import articles from "../../../../data/layout/articles";
import ArticleCard from "../../../common/home/ArticleCard";
import bgLight from "../../../../assets/images/background/bg-wool-light.avif";
import bgDarkTop from "../../../../assets/images/background/trans-top-darkwool.png";
import bgDarkBottom from "../../../../assets/images/background/trans-bottom-darkwool.png";

const Articles = () => {
  const Article = articles.map((article) => {
    return <ArticleCard key={article.id} {...article} />;
  });
  return (
    <section
      style={{ backgroundImage: `url(${bgLight})` }}
      className="w-full h-full"
    >
      <div
        style={{ backgroundImage: `url(${bgDarkTop})` }}
        className="w-full h-[100px]"
      ></div>
      <div className="w-[980px]  px-[15px] mx-auto">
        <div className="-mt-[25px] -mx-[15px]">{Article}</div>
      </div>
      <div
        style={{ backgroundImage: `url(${bgDarkBottom})` }}
        className="w-full h-[100px]"
      ></div>
    </section>
  );
};

export default Articles;
