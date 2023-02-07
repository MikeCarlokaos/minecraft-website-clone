import React from "react";
import bgLight from "../../../../assets/images/background/bg-wool-light.avif";
import bgDarkTop from "../../../../assets/images/background/trans-top-darkwool.png";
import bgDarkBottom from "../../../../assets/images/background/trans-bottom-darkwool.png";
import stream from "../../../../assets/page/community/image/stream/stream.webp";

const Stream = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgLight})` }}
      className="w-full h-full text-center"
      id="stream"
    >
      <div
        style={{ backgroundImage: `url(${bgDarkTop})` }}
        className="w-full h-[100px]"
      ></div>
      <div className="w-full px-[15px] mx-auto md:w-[980px]">
        <div className="py-8">
          <h3 className="flex flex-col font-bold text-[28px] leading-[34px] tracking-[1px] mb-[12.8px] pt-[75px]">
            watch on youtube
          </h3>
        </div>
        <div>
          <img src={stream} alt="Youtube Stream" />
        </div>
        <div className="pb-12 flex flex-col items-center">
          <h3 className="flex flex-col font-bold text-[28px] leading-[34px] tracking-[1px] mb-[12.8px] pt-[75px]">
            watch the stream again!
          </h3>
          <p className="w-full mb-10 md:w-[550px] ">
            Just because we named it Minecraft Live doesn't mean that you can't
            watch it over and over and over again whenever you want. Check out
            the 2021 edition of our annual celebration of all things Minecraft,
            featuring new updates, exciting announcements, mob votes, and more!
          </p>
          <a
            href="blank"
            className="h-[50px] font-bold text-lg text-white uppercase py-[15px] px-6 tracking-[0.54px] leading-5 bg-dark-green shadow-base-button hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-secondary transition-all"
          >
            official youtube channel
          </a>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${bgDarkBottom})` }}
        className="w-full h-[100px]"
      ></div>
    </section>
  );
};

export default Stream;
