import React from "react";
import transTop from "../../../../assets/page/minecraftLegends/images/background/MC-Legends_Glow-Transition_Top.jpg";
import content from "../../../../data/page/minecraftLegends/content";
import ContentArticle from "../../../common/minecraftLegends/ContentArticle";

const Content = () => {
  const ContentSnippet = content.map((article) => {
    return <ContentArticle key={article.id} {...article} />;
  });
  return (
    <section className="w-full h-full bg-light-blue-secondary">
      <div
        style={{ backgroundImage: `url(${transTop})` }}
        className="w-full h-[140px] bg-cover"
      ></div>
      <div className="pt-16">{ContentSnippet}</div>
    </section>
  );
};

export default Content;
