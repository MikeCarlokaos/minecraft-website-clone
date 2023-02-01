import React from "react";
import addons from "../../../../data/page/minecraft/addons";
import AddonsCard from "../../../common/minecraft/AddonsCard";

const Addons = () => {
  const AddonsArticle = addons.map((article) => {
    return <AddonsCard key={article.id} {...article} />;
  });
  return (
    <section className="w-full h-full bg-dirty-white">
      <div className="w-full text-center py-12">
        <h3 className="text-[28px] font-bold tracking-[1px] laeding-[34px]">
          expand your world
        </h3>
      </div>
      <div>{AddonsArticle}</div>
    </section>
  );
};

export default Addons;
