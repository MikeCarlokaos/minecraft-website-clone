import React from "react";
import java from "../../../../assets/page/redeem/image/redeem-art-minecraft.jpg";

const Java = () => {
  return (
    <div className="w-full h-full p-[30px] flex flex-col items-center bg-pastel-white md:flex-row">
      <div className="w-full h-full flex justify-center p-5 md:w-1/3">
        <img src={java} alt="Minecraft Java" />
      </div>
      <div className="w-full h-full flex flex-col gap-2 p-3 md:w-2/3">
        <h3 className="text-[28px] tracking-[1px] leading-[34px] font-bold">
          redeem minecraft: java edition
        </h3>
        <div className="text-[15px] leading-[22.5px] flex flex-col gap-2 mb-8">
          <p>
            <strong>NOTE:</strong> If you have a code for the newer
            <strong>Minecraft: Java & Bedrock Edition for PC</strong>, please
            follow{" "}
            <a
              href="blank"
              className="text-text-green font-bold tracking-normal underline"
            >
              these instructions to redeem your code
            </a>
            .
          </p>
          <p>
            Use the code on the back of your card or the gift code you received
            to download <strong>Minecraft: Java Edition</strong>.
          </p>
          <p>
            You will need an active Microsoft account to redeem the code.
            <a
              href="blank"
              className="text-text-green font-bold tracking-normal underline"
            >
              Learn more
            </a>{" "}
            about redeeming a Minecraft pre-paid card with the instructions for{" "}
            <strong>Minecraft: Java Edition</strong>.
          </p>
        </div>
        <div className="w-72 h-full uppercase">
          <a
            href="blank"
            className="w-full flex text-white items-center justify-center bg-dark-green shadow-base-button h-[50px] border-2 border-ash-tertiary font-bold text-lg py-[15px] px-6 tracking-[0.54px] leading-5 hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-secondary transition-all"
          >
            redeem java edition
          </a>
        </div>
      </div>
    </div>
  );
};

export default Java;
