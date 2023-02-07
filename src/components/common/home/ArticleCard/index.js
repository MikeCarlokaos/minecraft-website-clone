import React from "react";
import arrowLink from "../../../../assets/icons/link-arrow.svg";

const ArticleCard = ({ coverImg, alt, title, text, button }) => {
  return (
    <article
      className={`h-full w-full flex flex-col pt-[75px] md:flex-row md:odd:flex-row-reverse`}
    >
      <div className="h-full w-full px-5 md:w-1/2 md:px-0">
        <img src={coverImg} alt={alt} className=" h-full w-[475px]" />
      </div>
      <div className="h-[285px] w-full pl-[15px] pr-[30px] flex items-center md:w-1/2">
        <div>
          <h3 className="flex flex-col font-bold text-[28px] leading-[34px] tracking-[1px] mb-[12.8px]">
            {title}
          </h3>
          <p>{text}</p>
          <a
            href="blank"
            className="w-40 text-text-green font-bold uppercase flex items-center mt-8"
          >
            <img
              src={arrowLink}
              alt="arrow"
              className="w-[15px] h-[15px] mr-2"
            />
            {button}
          </a>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
