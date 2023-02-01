import React from "react";
import devices from "../../../../assets/page/minecraftLegends/images/devices/image-devices.webp";
import pixelTrans from "../../../../assets/page/minecraftLegends/images/background/MC-Legends_Pixel-Transition_Bottom.webp";

const Announcement = () => {
  return (
    <section className="w-full h-full bg-dirty-white-secondary">
      <div className="w-full h-full text-center pt-16">
        <h3 className="text-[28px] tracking-[1px] leading-[34px] font-bold">
          minecraft legends coming spring 2023
        </h3>
        <img
          src={devices}
          alt="Devices"
          className="w-full h-96 object-scale-down"
        />
      </div>
      <div
        style={{ backgroundImage: `url(${pixelTrans})` }}
        className="w-full h-[120px] bg-cover"
      ></div>
    </section>
  );
};

export default Announcement;
