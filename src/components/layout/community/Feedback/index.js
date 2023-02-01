import React from "react";
import house from "../../../../assets/page/community/image/feedback/house.webp";
import spider from "../../../../assets/page/community/image/feedback/spider.webp";
import dropbox from "../../../../assets/page/community/image/feedback/dropbox.webp";

const Feedback = () => {
  return (
    <section className="w-full h-full" id="feedback">
      <div className="w-[1140px] px-[15px] mx-auto py-32">
        <div className="w-full h-full flex items-center justify-center px-32 space-x-5">
          <div>
            <img src={house} alt="house" className="w-[190px] h-[190px]" />
          </div>
          <div className="w-72">
            <p>
              Want to learn more about Minecraft from players who know the game
              way better than us?
            </p>
            <a
              href="blank"
              className=" text-text-green font-bold uppercase flex items-center mt-8"
            >
              explore the unofficial wiki
            </a>
          </div>
        </div>
        <div className="w-full h-full pt-20">
          <div className="w-full h-full text-center">
            <h3 className="font-bold text-[28px] leading-[34px] tracking-[1px] mb-12 pt-[75px]">
              feedback
            </h3>
          </div>
          <div className="w-full h-full flex items-center justify-center space-x-10">
            <div className="w-[350px] bg-ash px-4 pb-5 flex flex-col items-center">
              <img src={spider} alt="spider" className="w-[205px]" />
              <h3 className="font-bold text-[28px] leading-[34px] tracking-[1px]">
                found a bug?
              </h3>
              <a
                href="blank"
                className=" text-text-green font-bold uppercase mt-8"
              >
                report it here!
              </a>
            </div>
            <div className="w-[350px] bg-ash px-4 pb-5 flex flex-col items-center">
              <img src={dropbox} alt="dropbox" className="w-[205px]" />
              <h3 className="font-bold text-[28px] leading-[34px] tracking-[1px]">
                got a suggestion?
              </h3>
              <a
                href="blank"
                className=" text-text-green font-bold uppercase mt-8"
              >
                submit your ideas here!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
