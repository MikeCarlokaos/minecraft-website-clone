import React, { useState } from "react";
import imgDungeons from "../../../../assets/page/minecraftDungeons/image/image-dungeons.webp";
import bgDark from "../../../../assets/images/background/bg-wool-dark.png";

const Buy = () => {
  const [optionValue, setOptionValue] = useState("");

  const handleChange = (e) => {
    setOptionValue(e.target.value);
  };

  return (
    <section
      style={{ backgroundImage: `url(${bgDark})` }}
      className="w-full h-full p-20"
    >
      <div className="ww-full h-full">
        <img
          src={imgDungeons}
          alt="Minecraft Dungeons"
          className="w-full h-full"
        />
      </div>
      <div className="w-full h-full text-center py-10">
        <h3 className="text-white text-[28px] leading-[34px] font-bold mb-4">
          buy minecraft dungeons & dlc
        </h3>
        <select
          value={optionValue}
          onChange={handleChange}
          className="w-[600px] h-10 bg-orange-primary text-light-brown font-bold uppercase pl-5 border-2 border-orange-tertiary"
        >
          <option
            value=""
            className="font-bold border-2 border-orange-tertiary"
          >
            select your device...
          </option>
          <option
            value="windows"
            className="font-bold border-2 border-orange-tertiary"
          >
            windows
          </option>
          <option
            value="steam"
            className="font-bold border-2 border-orange-tertiary"
          >
            steam
          </option>
          <option
            value="xbox one"
            className="font-bold border-2 border-orange-tertiary"
          >
            xbox one
          </option>
          <option
            value="nintendo switch"
            className="font-bold border-2 border-orange-tertiary"
          >
            nintendo switch
          </option>
          <option
            value="playstaion 4"
            className="font-bold border-2 border-orange-tertiary"
          >
            playstation 4
          </option>
        </select>
      </div>
    </section>
  );
};

export default Buy;
