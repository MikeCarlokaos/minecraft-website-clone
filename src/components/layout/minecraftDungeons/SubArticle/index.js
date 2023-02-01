import React from "react";
import arrowLink from "../../../../assets/icons/link-arrow.svg";
import img1 from "../../../../assets/page/minecraftDungeons/image/community.webp";

const SubArticle = () => {
  return (
    <section className="w-full h-full py-10 bg-white">
      <div className="w-full pb-8 text-center">
        <h3 className="text-[28px] tracking-[1px] leading-[34px] font-bold mb-4">
          Expand your world
        </h3>
      </div>
      <div className={`w-full h-full flex items-center px-20 py-10 `}>
        <div className="w-1/2 h-stretch px-10 flex flex-col content-center">
          <h3 className="text-[28px] tracking-[1px] leading-[34px] font-bold">
            find a new perspective
          </h3>
          <p>
            In our community of millions, someone is always ready with fresh
            inspiration and news of the latest creations and releases.
          </p>
          <a
            href="blank"
            className="w-40 whitespace-nowrap text-text-green font-bold uppercase flex items-center mt-8"
          >
            <img
              src={arrowLink}
              alt="arrow"
              className="w-[15px] h-[15px] mr-2"
            />
            join the community
          </a>
        </div>
        <div className="w-1/2 px-7 ">
          <img src={img1} alt="community" />
        </div>
      </div>
    </section>
  );
};

export default SubArticle;
