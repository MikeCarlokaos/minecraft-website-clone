import React from "react";
import arrowLink from "../../../../assets/icons/link-arrow.svg";

const ArticleCard = ({ coverImg, title, text, style }) => {
  return (
    <div className={`w-full h-full flex ${style} items-center px-20 py-10 `}>
      <div className="w-1/2 h-stretch px-10 flex flex-col content-center">
        <h3 className="text-[28px] tracking-[1px] leading-[34px] font-bold">
          {title}
        </h3>
        <p>{text}</p>
        <a
          href="blank"
          className="w-40 whitespace-nowrap text-text-green font-bold uppercase flex items-center mt-8"
        >
          <img src={arrowLink} alt="arrow" className="w-[15px] h-[15px] mr-2" />
          learn more
        </a>
      </div>
      <div className="w-1/2 px-7 ">
        <img src={coverImg} alt={title} />
      </div>
    </div>
  );
};

export default ArticleCard;
