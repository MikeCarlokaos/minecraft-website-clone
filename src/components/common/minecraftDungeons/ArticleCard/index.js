import React from "react";
import arrowLink from "../../../../assets/icons/link-arrow.svg";

const ArticleCard = ({ coverImg, title, text }) => {
  return (
    <div
      className={`w-full h-full flex flex-col-reverse items-center px-5 py-10 gap-y-3 md:flex-row md:odd:flex-row-reverse md:px-20 md:gap-y-0`}
    >
      <div className="w-full h-stretch px-10 flex flex-col content-center text-center md:text-start md:w-1/2">
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
      <div className="w-full px-7 md:w-1/2">
        <img src={coverImg} alt={title} />
      </div>
    </div>
  );
};

export default ArticleCard;
