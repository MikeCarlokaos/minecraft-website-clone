import React from "react";
import creator from "../../../../assets/page/redeem/image/Redeem-Page_Creator_Series.webp";

const Creator = () => {
  return (
    <div className="w-full h-full p-[30px] flex flex-col items-center bg-pastel-white-green md:flex-row">
      <div className="w-full h-full flex justify-center p-5 md:w-1/3">
        <img src={creator} alt="Minecraft Creator Series" />
      </div>
      <div className="w-full h-full flex flex-col gap-2 p-3 md:w-2/3">
        <h3 className="text-[28px] tracking-[1px] leading-[34px] font-bold">
          redeem the minecraft creator series code
        </h3>
        <div className="text-[15px] leading-[22.5px] flex flex-col gap-2 mb-8">
          <p>
            Get your character creator items for{" "}
            <strong>Mattel's Minecraft Creator Series</strong> here! Enter the
            5x5 code you received on the insert inside the package of your
            Mattel Minecraft purchase in the field below and get your items to
            wear in-game!
          </p>
          <p>
            Questions?{" "}
            <a
              href="blank"
              className="text-text-green font-bold tracking-normal underline"
            >
              Check out the FAQ
            </a>
            . Redeem by June 30, 2024.
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

export default Creator;
