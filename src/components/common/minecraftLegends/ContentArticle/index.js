import React from "react";

const ContentArticle = ({ coverImg, title, text }) => {
  return (
    <div className="w-[1140px] h-full mx-auto px-[15px] py-12">
      <div>
        <img src={coverImg} alt="Content SnapShot" />
      </div>
      <div className="w-full h-full flex justify-center text-center  mt-12">
        <div className="w-[580px]">
          <h3 className="text-[28px] tracking-[1px] leading-[34px] font-bold mb-5">
            {title}
          </h3>
          <p className="text-[16px]">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentArticle;
