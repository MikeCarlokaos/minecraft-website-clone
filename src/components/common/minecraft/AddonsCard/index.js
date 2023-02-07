import React from "react";
import arrowLink from "../../../../assets/icons/link-arrow.svg";

const AddonsCard = ({ coverImg, title, text, button }) => {
  return (
    <div
      className={`flex flex-col-reverse px-28 pb-10 md:flex-row md:odd:flex-row-reverse`}
    >
      <div className="w-full h-full flex self-center justify-center md:w-1/2">
        <div className="w-full text-center md:w-[410px] md:text-start">
          <h3 className="text-[28px] font-bold tracking-[1px] laeding-[34px] mb-3">
            {title}
          </h3>
          <p className="text-[16px] tracking-tight leading-[24px]">{text}</p>
          <a
            href="blank"
            className="w-40 whitespace-nowrap text-text-green font-bold uppercase flex items-center mt-8"
          >
            <img
              src={arrowLink}
              alt="arrow"
              className="w-full md:w-[15px] h-[15px] mr-2"
            />
            {button}
          </a>
        </div>
      </div>
      <div className="w-full h-full flex pb-3 md:w-1/2 md:pb-0">
        <img src={coverImg} alt={title} />
      </div>
    </div>
  );
};

export default AddonsCard;
