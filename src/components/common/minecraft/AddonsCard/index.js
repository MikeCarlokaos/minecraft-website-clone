import React from "react";
import arrowLink from "../../../../assets/icons/link-arrow.svg";

const AddonsCard = ({ coverImg, title, text, button, style }) => {
  return (
    <div className={` flex ${style} px-28 pb-10`}>
      <div className="w-1/2 h-full flex self-center justify-center">
        <div className="w-[410px]">
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
              className="w-[15px] h-[15px] mr-2"
            />
            {button}
          </a>
        </div>
      </div>
      <div className="w-1/2 h-full flex">
        <img src={coverImg} alt={title} />
      </div>
    </div>
  );
};

export default AddonsCard;
