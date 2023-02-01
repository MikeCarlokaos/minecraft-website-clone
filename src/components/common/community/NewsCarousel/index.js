import React from "react";

const NewsCarousel = ({ coverImg, title, text }) => {
  return (
    <div className="h-full w-[281px] mx-auto text-black py-10">
      <div className=" h-full w-full text-center flex flex-col justify-center">
        <div className="relative img-container w-full">
          <img
            src={coverImg}
            alt={title}
            className="h-full w-full mb-4  border-2 hover:border-light-green"
          />
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
