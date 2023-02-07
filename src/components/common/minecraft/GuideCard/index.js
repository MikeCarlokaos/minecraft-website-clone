import React from "react";

const GuideCard = ({ coverImg, title, text }) => {
  return (
    <div
      className={` flex flex-col px-10 my-[15px] md:flex-row md:odd:flex-row-reverse md:px-36`}
    >
      <div className="w-full h-full flex md:w-1/2">
        <img src={coverImg} alt={title} />
      </div>
      <div className="w-full h-full flex self-center justify-center md:w-1/2">
        <div className="w-[410px] bg-white p-[30px]">
          <h3 className="text-[28px] font-bold tracking-[1px] laeding-[34px] mb-3">
            {title}
          </h3>
          <p className="text-[16px] tracking-tight leading-[24px]">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
