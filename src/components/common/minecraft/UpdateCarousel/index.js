import React from "react";
import arrowLink from "../../../../assets/icons/link-arrow.svg";

const UpdateCarousel = ({ coverImg, title, text }) => {
  return (
    <div className=" w-full p-[30px] bg-white flex">
      <div className="w-[540px] mr-[30px]">
        <img src={coverImg} alt={title} />
      </div>
      <div className="w-[242px]">
        <div className="pt-5">
          <h2 className="w-full tracking-[1px] text-[28px] leading-[34px] font-bold mb-[20px]">
            {title}
          </h2>
          <p className="text-[14px] leading-[24px]">{text}</p>
          <a
            href="blank"
            className="w-40 text-text-green font-bold  flex items-center mt-3"
          >
            <img
              src={arrowLink}
              alt="arrow"
              className="w-[15px] h-[15px] mr-2"
            />
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpdateCarousel;
