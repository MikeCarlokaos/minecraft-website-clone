import React from "react";

import Vanilla from "../Vanilla";
import Java from "../Java";
import Realms from "../Realms";
import Burberry from "../Burberry";
import Headphones from "../Headphones";
import Creator from "../Creator";
import Wild from "../Wild";
import CavesCliffs from "../CavesCliffs";
import Dungeons from "../Dungeons";
import Minecoins from "../Minecoins";
import Kroger from "../Kroger";
import HyVee from "../HyVee";
import Enderwood from "../Enderwood";

const Tokens = () => {
  return (
    <section className="w-full h-full bg-ash-tertiary ">
      <div className="w-[920px] h-full py-16 mx-auto">
        <div className="w-full h-full flex items-center justify-center mb-20">
          <h3 className="w-[500px] text-center text-white text-[36px] tracking-[1px] leading-[40px] font-bold">
            redeem your minecraft tokens here
          </h3>
        </div>
        <ul className="flex flex-col gap-12 mt-10">
          <li className="w-full h-full">
            <Vanilla />
          </li>
          <li className="w-full h-full">
            <Java />
          </li>
          <li className="w-full h-full">
            <Realms />
          </li>
          <li className="w-full h-full">
            <Burberry />
          </li>
          <li className="w-full h-full">
            <Headphones />
          </li>
          <li className="w-full h-full">
            <Creator />
          </li>
          <li className="w-full h-full">
            <Wild />
          </li>
          <li className="w-full h-full">
            <CavesCliffs />
          </li>
          <li className="w-full h-full">
            <Dungeons />
          </li>
          <li className="w-full h-full">
            <Minecoins />
          </li>
          <li className="w-full h-full">
            <Kroger />
          </li>
          <li className="w-full h-full">
            <HyVee />
          </li>
          <li className="w-full h-full">
            <Enderwood />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Tokens;
