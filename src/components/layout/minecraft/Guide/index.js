import React from "react";
import bgDark from "../../../../assets/images/background/bg-wool-dark.png";
import bgLight from "../../../../assets/images/background/bg-wool-light.avif";
import bgDarkTop from "../../../../assets/images/background/trans-top-darkwool.png";
import bgDarkBottom from "../../../../assets/images/background/trans-bottom-darkwool.png";
import guides from "../../../../data/page/minecraft/guides";
import GuideCard from "../../../common/minecraft/GuideCard";

const Guide = () => {
  const Tips = guides.map((tip) => {
    return <GuideCard key={tip.id} {...tip} />;
  });

  return (
    <section className="h-full w-full">
      <div>
        <h3
          style={{ backgroundImage: `url(${bgDark})` }}
          className="text-center text-[28px] text-white tracking-[1px] leading-[34px] font-bold uppercase pt-[100px] pb-[50px]"
        >
          how it works
        </h3>
      </div>
      <div
        style={{ backgroundImage: `url(${bgLight})` }}
        className="w-full h-sreen"
      >
        <div
          style={{ backgroundImage: `url(${bgDarkTop})` }}
          className="w-full h-[100px]"
        >
          {/* bg */}
        </div>
        <div className="w-full h-full">{Tips}</div>
        <div
          style={{ backgroundImage: `url(${bgDarkBottom})` }}
          className="w-full h-[100px]"
        >
          {/* bg */}
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${bgDark})` }}
        className="w-full h-32"
      ></div>
    </section>
  );
};

export default Guide;
