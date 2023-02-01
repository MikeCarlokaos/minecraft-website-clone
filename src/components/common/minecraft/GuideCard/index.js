import React from "react";

const GuideCard = ({ coverImg, title, text, style }) => {
  return (
    <div className={` flex ${style} px-36 my-[15px]`}>
      <div className="w-1/2 h-full flex">
        <img src={coverImg} alt={title} />
      </div>
      <div className="w-1/2 h-full flex self-center justify-center">
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
