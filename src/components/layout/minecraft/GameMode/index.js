import React, { useState } from "react";
import modes from "../../../../data/page/minecraft/modes";

const GameMode = () => {
  const [play, setPlay] = useState(modes[0]);

  const handleClick = (index) => {
    const slide = modes[index];
    setPlay(slide);
  };

  return (
    <section className="w-full h-full">
      <div
        style={{ backgroundImage: `url(${play.bgImg})` }}
        className="w-full h-[700px]  bg-bottom"
      >
        <nav className="w-full flex  justify-center">
          {modes.map((mode, i) => {
            return (
              <ul
                key={i}
                className="text-white cursor-pointer text-[10px] tracking-[1px] font-bold uppercase p-5 "
              >
                <li
                  className={`p-2 ${
                    play.id === i ? "bg-white text-black" : ""
                  }`}
                  onClick={() => handleClick(i)}
                >
                  {mode.title}
                </li>
              </ul>
            );
          })}
        </nav>
        <div className={`w-full flex flex-col items-center mt-3 ${play.style}`}>
          <h2 className="tracking-[1px] text-[28px] leading-[34px] font-bold">
            {play.title}
          </h2>
          <p className="w-full text-center text-[15px] leading-[20px] mt-8 px-5 md:w-[550px] md:px-0">
            {play.text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GameMode;
