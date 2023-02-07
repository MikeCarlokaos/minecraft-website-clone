import React from "react";
import bg from "../../../../assets/page/minecraftDungeons/image/background/imrsv-mediablock-unite.webp";

const Unite = () => {
  return (
    <section className="w-full h-screen p-10 bg-bg-violet">
      <div style={{ backgroundImage: `url(${bg})` }} className="w-full h-full ">
        <div className="text-white w-96 h-full ml-12 pt-32 md:ml-32">
          <h3 className="text-[28px] tracking-[1px] leading-[34px] mb-4">
            unite. fight. survive.
          </h3>
          <p>
            Brave the dungeons alone, or team up with friends! Up to four
            players can battle together through action-packed, treasure-stuffed,
            wildly varied levels—all in an epic quest to save the villagers and
            take down the evil Arch-Illager!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Unite;
