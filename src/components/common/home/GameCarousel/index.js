import React from "react";

const GameCarousel = ({ coverImg, title, text, link }) => {
  return (
    <div className="h-full w-full mt-3 px-10 text-center">
      <div className="w-full h-full flex flex-col items-center justify-items-center group md:w-[220px] ">
        <div className="w-full h-[70%] mb-8">
          <img
            src={coverImg}
            alt={title}
            className="h-full w-full hover:scale-105 hover:border-2 hover:border-light-green"
          />
        </div>
        <a
          href={link}
          className="uppercase text-[18px] text-text-green font-bold leading-[24px] text-wrap mb-[6px] group-hover:text-black hover:underline"
        >
          {title}
        </a>
        <p className="text-[14px] leading-[20px]">{text}</p>
      </div>
    </div>
  );
};

export default GameCarousel;
