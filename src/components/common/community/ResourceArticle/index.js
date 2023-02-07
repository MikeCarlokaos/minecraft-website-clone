import React from "react";
import arrowLink from "../../../../assets/icons/link-arrow-light-green.svg";

const ResourceArticle = ({ coverImg, alt, title, text }) => {
  return (
    <article
      className={`h-full w-full flex flex-col pt-[75px] md:flex-row md:odd:flex-row-reverse`}
    >
      <div className="h-full w-full md:w-1/2">
        <img src={coverImg} alt={alt} className=" h-full w-full px-5" />
      </div>
      <div className="h-[285px] w-full px-12 flex items-center text-center text-white md:w-1/2 md:text-start">
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
