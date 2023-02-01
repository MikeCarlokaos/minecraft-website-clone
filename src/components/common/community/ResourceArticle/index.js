import React from "react";
import arrowLink from "../../../../assets/icons/link-arrow-light-green.svg";

const ResourceArticle = ({ coverImg, alt, title, text, button, style }) => {
  return (
    <article className={`h-full w-full flex ${style} pt-[75px]`}>
      <div className="h-full w-1/2">
        <img src={coverImg} alt={alt} className=" h-full w-full px-5" />
      </div>
      <div className="h-[285px] w-1/2 px-12 flex items-center text-white">
        <div>
          <h3 className="flex flex-col font-bold text-[28px] leading-[34px] tracking-[1px] mb-[12.8px]">
            {title}
          </h3>
          <p>{text}</p>
          <a
            href="blank"
            className="w-40 text-light-green font-bold uppercase flex items-center mt-8"
          >
            <img
              src={arrowLink}
              alt="arrow"
              className="w-[15px] h-[15px] mr-2"
            />
            learn more
          </a>
        </div>
      </div>
    </article>
  );
};

export default ResourceArticle;
