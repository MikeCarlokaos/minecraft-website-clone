import React from "react";

const DLCCard = ({ coverImg, title, text }) => {
  return (
    <div className="w-[350px] h-full hover:scale-105 transition-all hover:shadow-2xl hover:shadow-black">
      <div className="w-full h-[350px]">
        <img src={coverImg} alt={title} className="w-full h-full" />
      </div>

      <div className="w-full h-60 bg-white p-8">
        <h3 className="text-[18px] leading-[26px] font-bold mb-2">{title}</h3>
        <p className="text-[15px] leading-[20px]">{text}</p>
      </div>
      <div className="w-full h-20 bg-red-violet shadow-top-line flex items-center justify-center">
        <div>
          <a
            href="blank"
            className=" w-28 p-2 text-center text-light-brown text-[14px] font-bold tracking-[1.4px] leading-[21px] bg-orange-primary uppercase shadow-base-button-orange-secondary hover:hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-tertiary hover:text-white"
          >
            learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default DLCCard;
