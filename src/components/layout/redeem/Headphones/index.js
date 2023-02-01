import React from "react";
import headphone from "../../../../assets/page/redeem/image/WardenHeadphones_Redeem.webp";

const Headphones = () => {
  return (
    <div className="w-full h-full p-[30px] flex items-center bg-pastel-yellow">
      <div className="w-1/3 h-full p-5">
        <img src={headphone} alt="Warden Headphones" />
      </div>
      <div className="w-2/3 h-full flex flex-col gap-2 p-3">
        <h3 className="text-[28px] tracking-[1px] leading-[34px] font-bold">
          redeem the warden headphones
        </h3>
        <div className="text-[15px] leading-[22.5px] flex flex-col gap-2 mb-8">
          <p>
            Collect your Warden{" "}
            <strong>Headphones Character Creator item</strong> here! Click the
            “Unlock Now” button if you have the game installed on the device you
            are viewing and follow the instructions to download your item. If
            you don't have the game installed on this device, follow the
            instructions{" "}
            <a
              href="blank"
              className="text-text-green font-bold tracking-normal underline"
            >
              here
            </a>{" "}
            to download the Warden Headphones. Redeem by January 31, 2023.
          </p>
        </div>
        <div className="w-48 h-full uppercase">
          <a
            href="blank"
            className="w-full flex text-white items-center justify-center bg-dark-green shadow-base-button h-[50px] border-2 border-ash-tertiary font-bold text-lg py-[15px] px-6 tracking-[0.54px] leading-5 hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-secondary transition-all"
          >
            unlock now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Headphones;
