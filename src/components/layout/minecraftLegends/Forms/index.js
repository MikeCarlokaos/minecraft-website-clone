import React from "react";
import Dropdown from "../../../common/minecraftLegends/DropDown";

const Forms = () => {
  return (
    <section className="w-full h-full bg-orange-light-secondary py-16">
      <div className="w-[1140px] h-full px-[15px] mx-auto text-[13px] leading-[20px]">
        <h3 className="normal-case text-[28px] tracking-[1px] leading-[34px] font-bold mb-4">
          Get the latest Minecraft Legends news!
        </h3>
        <p className="mb-6">
          Enter your email address, select your country or region, and submit.
          Opt out at any time. We promise not to spam you.
        </p>
        <div>
          <form action="register">
            <div className="flex w-full h-full mb-8">
              <div className="w-1/2 flex flex-col pr-7">
                <label
                  htmlFor=""
                  className="mb-3 text-[16px] leading-[23px] font-bold after:content-['*'] after:ml-0.5 after:text-white"
                >
                  Email Address
                </label>
                <input type="email" name="email" id="email" className="h-8" />
              </div>

              <Dropdown />
            </div>
            <div className="space-y-3 mb-12">
              <p>
                By opting in, you agree to receive communications from
                Minecraft. You can always unsubscribe.
              </p>
              <p className="flex space-x-2">
                <input
                  type="checkbox"
                  name="check"
                  id="check"
                  className="mr-3"
                />
                I would like information, tips, and offers about Minecraft.
                <a href="blank" className="text-white underline">
                  Privacy Statement
                </a>
              </p>
              <p className="text-white italic">* This field is required.</p>
            </div>

            <button
              type="submit"
              className="relative w-24 h-full px-4 py-4 ml-4 bg-white text-ash-secondary font-bold border-b-4 border-ash-secondary before:content-[''] before:absolute before:bottom-1/2 before:translate-y-1/2 before:w-3 before:h-8 before:-left-3 before:bg-white before:border-b-4 before:border-ash-secondary after:absolute after:bottom-1/2 after:translate-y-1/2 after:w-3 after:h-8 after:-right-3 after:bg-white after:border-b-4 after:border-ash-secondary "
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Forms;
