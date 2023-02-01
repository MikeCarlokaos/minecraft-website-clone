import React from "react";
import realm from "../../../../assets/page/redeem/image/Realms-Plus.webp";

const Realms = () => {
  return (
    <div className="w-full h-full p-[30px] flex items-center bg-pastel-purple">
      <div className="w-1/3 h-full p-5">
        <img src={realm} alt="Minecraft Realms" />
      </div>
      <div className="w-2/3 h-full flex flex-col gap-2 p-3">
        <h3 className="text-[28px] tracking-[1px] leading-[34px] font-bold">
          redeem minecraft realms plus for xbox and windows 10
        </h3>
        <div className="text-[15px] leading-[22.5px] flex flex-col gap-2 mb-8">
          <p>
            Use the code on the back of your Minecraft: Realms Plus Subscription
            card or that was printed on your store receipt.
          </p>
          <p>
            You will need an active Microsoft account to redeem the code, and
            you will need to log in to Minecraft: Bedrock Edition on either{" "}
            <strong>Xbox or Windows 10</strong> to activate your Realm.{" "}
            <a
              href="blank"
              className="text-text-green font-bold tracking-normal underline"
            >
              Learn more here
            </a>{" "}
            on our Realms Plus FAQ.
          </p>
        </div>
        <div className="w-full h-full flex items-center gap-16">
          <div className="flex flex-col">
            <label htmlFor="code">enter code</label>
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

export default Realms;
