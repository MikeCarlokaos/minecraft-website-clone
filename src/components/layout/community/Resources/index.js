import React from "react";
import bgDark from "../../../../assets/images/background/bg-wool-dark.png";
import resources from "../../../../data/page/community/resources";
import ResourceArticle from "../../../common/community/ResourceArticle";

const Resources = () => {
  const Article = resources.map((article) => {
    return <ResourceArticle key={article.id} {...article} />;
  });
  return (
    <section
      style={{ backgroundImage: `url(${bgDark})` }}
      className="w-full h-full py-28"
      id="resources"
    >
      <div className="w-[1140px] h-full px-[15px] mx-auto">
        <div className="w-full text-center mb-16">
          <h3 className="flex flex-col font-bold text-[28px] leading-[34px] tracking-[1px] mb-[12.8px] pt-[75px] text-white">
            resource for new players
          </h3>
        </div>
        <div className="w-full  px-[15px] mx-auto">
          <div className="-mt-[25px] -mx-[15px]">{Article}</div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
