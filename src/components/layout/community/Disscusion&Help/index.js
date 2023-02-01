import React from "react";
import bgDark from "../../../../assets/images/background/bg-wool-dark.png";
import discordIcon from "../../../../assets/page/community/icon/pixel-cta-discord.svg";

const Disccusions = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgDark})` }}
      className="w-full h-full bg-cover py-16"
      id="discussion"
    >
      <div className="w-[600px] h-full mx-auto text-white text-center">
        <div>
          <h3 className="w-full text-center tracking-[1px] text-[28px] leading-[34px] font-bold">
            discussions & help
          </h3>
        </div>
        <div className="w-full h-full grid gap-y-10 mt-10">
          <div className="w-full h-[72px]">
            <a
              href="blank"
              className="w-full h-full flex  items-center justify-center font-bold text-lg  uppercase tracking-[0.54px] leading-5 bg-dark-green shadow-base-button hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-secondary transition-all"
            >
              <img
                src={discordIcon}
                alt="Discord Icon"
                className="w-12 h-12 mr-5"
              />
              minecraft on discord
            </a>
          </div>
          <div className="w-full h-[72px] grid grid-cols-2 gap-x-5">
            <a
              href="blank"
              className="w-full h-full flex items-center justify-center font-bold text-lg  uppercase tracking-[0.54px] leading-5 bg-grey-primary shadow-base-button-gray hover:bg-gradient-to-b from-base-gray to-dark-gray  hover:shadow-hover-button-gray transition-all "
            >
              latest changelogs
            </a>
            <a
              href="blank"
              className="w-full h-full flex items-center justify-center font-bold text-lg  uppercase tracking-[0.54px] leading-5 bg-grey-primary shadow-base-button-gray hover:bg-gradient-to-b from-base-gray to-dark-gray  hover:shadow-hover-button-gray transition-all "
            >
              beta information
            </a>
          </div>
          <div className="w-full h-[72px]">
            <a
              href="blank"
              className="w-full h-full flex items-center justify-center font-bold text-lg  uppercase tracking-[0.54px] leading-5 bg-grey-primary shadow-base-button-gray hover:bg-gradient-to-b from-base-gray to-dark-gray  hover:shadow-hover-button-gray transition-all "
            >
              support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disccusions;
