import React from "react";
import bg from "../../../../assets/page/minecraftLegends/images/background/image3.webp";
import arrowLink from "../../../../assets/icons/link-arrow-blue.svg";

const Wallpaper = () => {
  return (
    <section className="w-full h-full bg-light-blue-secondary">
      <div className="w-full md:w-[1140px] h-full mx-auto px-[15px] py-12">
        <div>
          <img src={bg} alt="Content SnapShot" />
        </div>
        <div className="w-full h-full flex justify-center text-center text-blue-tertiary py-16">
          <div className="w-[580px]">
            <h3 className="text-[28px] tracking-[1px] leading-[34px] font-bold mb-5">
              minecraft legends wallpaper
            </h3>
            <p className="text-[16px]">
              Bring the battle for the Overworld to your favorite device with
              these free hi-res images.
            </p>
            <div className="w-full flex justify-center">
              <a
                href="blank"
                className="w-40 whitespace-nowrap text-blue-tertiary font-bold uppercase flex items-center mt-8"
              >
                <img
                  src={arrowLink}
                  alt="arrow"
                  className="w-[15px] h-[15px] mr-2 fill-blue-primary"
                />
                download now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wallpaper;
