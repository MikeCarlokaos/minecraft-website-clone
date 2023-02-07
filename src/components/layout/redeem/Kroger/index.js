import React from "react";
import kroger from "../../../../assets/page/redeem/image/Minecraft_Redeem_Kroger.webp";

const Kroger = () => {
  return (
    <div className="w-full h-full p-[30px] flex flex-col items-center bg-pastel-lavender md:flex-row">
      <div className="w-full h-full flex justify-center p-5 md:w-1/3">
        <img src={kroger} alt="Minecraft Character Item Kroger" />
      </div>
      <div className="w-full h-full flex flex-col gap-2 p-3 md:w-2/3">
        <h3 className="text-[28px] tracking-[1px] leading-[34px] font-bold">
          redeemyour exclusive code from kroger
        </h3>
        <div className="text-[15px] leading-[22.5px] flex flex-col gap-2 mb-8">
          <p>
            Collect your exclusive{" "}
            <strong>Time Flies Character Creator item</strong> here! Enter your
            5x5 code in the field below to redeem.
          </p>
          <p>
            Questions?{" "}
            <a
              href="blank"
              className="text-text-green font-bold tracking-normal underline"
            >
              Check out the FAQ
            </a>
            . Redeem by March 28, 2023.
          </p>
        </div>
        <div className="w-full h-full flex flex-col items-center gap-8 md:gap-16 md:flex-row">
          <div className="flex flex-col">
            <label
              htmlFor="code"
              className="text-[14px] tracking-[1.4px] leading-[19px] uppercase font-bold"
            >
              enter code
            </label>
            <input type="text" name="code" id="code" className="py-3" />
            <p className="text-red-500 italic text-xs">
              * This field is Required
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex text-white items-center justify-center bg-dark-green shadow-base-button h-[50px] border-2 border-ash-tertiary font-bold text-lg py-[15px] px-6 tracking-[0.54px] leading-5 hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-secondary transition-all"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kroger;
