import React from "react";

const CommunityGridCard = ({ coverImg, title, text, tag, style, loadGrid }) => {
  return (
    <div className={`h-[270px] w-[270px] ${!loadGrid ? style : ""}`}>
      <div className="relative h-full w-full text-center overflow-hidden">
        <img src={coverImg} alt={title} />
        <div className="absolute bottom-0 w-full h-20 hover:h-32 ">
          <div className="relative w-full h-full bg-black opacity-75 text-white">
            <br />
            <h3 className="mb-[16px] px-5">{title}</h3>
            <p className="text-[14px] leading-[18.2px]">{text}</p>
          </div>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white opacity-100 text-text-dark text-[10px] font-bold leading-[15px] tracking-[1px] uppercase py-[6px] px-[16px]">
            {tag}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityGridCard;
