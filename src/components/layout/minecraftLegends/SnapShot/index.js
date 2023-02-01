import React, { Component } from "react";
import Slider from "react-slick";
import trailer from "../../../../assets/page/minecraftLegends/images/snapshot/MC-Legends_Carousel-Trailer.jpg";
import trailerMob from "../../../../assets/page/minecraftLegends/images/snapshot/MC-Legends_Carousel-Trailer_Mob.webp";
import trailerPiglins from "../../../../assets/page/minecraftLegends/images/snapshot/MC-Legends_Carousel-Trailer_Piglins.jpg";
import trailerCreate from "../../../../assets/page/minecraftLegends/images/snapshot/MC-Legends_Carousel-Trailer_Create.webp";
import screenShotA from "../../../../assets/page/minecraftLegends/images/snapshot/MC-Legends_Carousel-Image_Screenshot-A.webp";
import screenShotB from "../../../../assets/page/minecraftLegends/images/snapshot/MC-Legends_Carousel-Image_Screenshot-B.webp";

const SamplePrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-5 left-10 bg-dark-green p-4 cursor-pointer shadow-base-button hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-secondary"
      onClick={onClick}
    >
      <svg
        role="img"
        className="h-[18px] w-[18px]  fill-white"
        title="Previous Arrow"
      >
        <use href="#pixel-arrow-left-news">
          <svg viewBox="0 0 512 512" id="pixel-arrow-left-news">
            <path d="M96 288v64h64v64h64v64h64V288h192v-64H288V32h-64v64h-64v64H96v64H32v64h64z"></path>
          </svg>
        </use>
      </svg>
    </div>
  );
};

const SampleNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-5 right-10 bg-dark-green p-4 cursor-pointer shadow-base-button hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-secondary"
      onClick={onClick}
    >
      <svg
        role="img"
        className=" h-[18px] w-[18px] fill-white"
        title="Next Arrow"
      >
        <use href="#pixel-arrow-right-news">
          <svg viewBox="0 0 512 512" id="pixel-arrow-right-news">
            <path d="M416 224v-64h-64V96h-64V32h-64v192H32v64h192v192h64v-64h64v-64h64v-64h64v-64h-64z"></path>
          </svg>
        </use>
      </svg>
    </div>
  );
};

export default class SnapShot extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <div className="w-full h-full bg-blue-secondary ">
        <div className=" mx-[5%]">
          <div className=" pt-[75px] pb-[100px]">
            <Slider {...settings} className="relative px-[125px]">
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={trailer}
                  alt="Trailer"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={trailerMob}
                  alt="Trailer Mob"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={trailerPiglins}
                  alt="Trailer Piglins"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={trailerCreate}
                  alt="Trailer Create New Game"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={screenShotA}
                  alt="Screenshot 1"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={screenShotB}
                  alt="Screenshot 2"
                  className="w-full h-full px-[15px]"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
