import React from "react";

const NewsCarousel = ({ coverImg, tag, title, text }) => {
  return (
    <div className="h-full w-[281px] mx-auto text-white py-10">
      <div className=" h-full w-full text-center flex flex-col justify-center">
        <div className="relative img-container w-full">
          <img
            src={coverImg}
            alt={title}
            className="h-full w-full mb-4  border-2 hover:border-light-green"
          />
          <div className="hidden tag absolute bottom-1 left-1/2 -translate-x-1/2 bg-white text-text-dark text-[10px] font-bold leading-[15px] tracking-[1px] uppercase py-[6px] px-[16px]">
            {tag}
          </div>
        </div>
        <div className="h-32">
          <h3 className="font-bold hover:text-text-base-green">{title}</h3>
          <p className="hidden">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCarousel;
