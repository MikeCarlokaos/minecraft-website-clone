import React, { Component } from "react";
import Slider from "react-slick";
import dungeonVoid from "../../../../assets/page/minecraftDungeons/image/snapshots/dungeons-void-vidart.webp";
import dungeonDepths from "../../../../assets/page/minecraftDungeons/image/snapshots/Dungeons-DLC-Hidden-Depths.webp";
import dungeonNether from "../../../../assets/page/minecraftDungeons/image/snapshots/Dungeons-DLC-Flame-of-the-Nether.webp";
import dungeonPeaks from "../../../../assets/page/minecraftDungeons/image/snapshots/MCD-HowlingPeaks.jpg";
import CrossPLay from "../../../../assets/page/minecraftDungeons/image/snapshots/Crossplay-Thumbnails.webp";
import dungeonVid from "../../../../assets/page/minecraftDungeons/image/snapshots/dungeonsvidcover.webp";
import dungeonE3 from "../../../../assets/page/minecraftDungeons/image/snapshots/Dungeons-E3-2019-Gameplay-Reveal.webp";
import dungeonTrailer from "../../../../assets/page/minecraftDungeons/image/snapshots/announcetrailer-thumb.jpg";
import carousel1 from "../../../../assets/page/minecraftDungeons/image/snapshots/carousel-01.jpg";
import carousel2 from "../../../../assets/page/minecraftDungeons/image/snapshots/carousel-02.webp";
import carousel3 from "../../../../assets/page/minecraftDungeons/image/snapshots/carousel-03.jpg";
import carousel4 from "../../../../assets/page/minecraftDungeons/image/snapshots/carousel-04.jpg";

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

export default class SnapShots extends Component {
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
      <div className="w-full h-full bg-white ">
        <div className=" mx-[5%]">
          <div className=" pt-[75px] pb-[100px]">
            <h2 className="w-full text-center tracking-[1px] text-[28px] leading-[34px] font-bold mb-[50px]">
              explore minecraft dungeons
            </h2>
            <Slider {...settings} className="relative px-[125px]">
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={dungeonVoid}
                  alt="Warden"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={dungeonDepths}
                  alt="Allay"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={dungeonNether}
                  alt="Mangrove House"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={dungeonPeaks}
                  alt="Mangrove Biome"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={CrossPLay}
                  alt="Frogs"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={dungeonVid}
                  alt="Ancient City"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={dungeonE3}
                  alt="Ancient City"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={dungeonTrailer}
                  alt="Ancient City"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={carousel1}
                  alt="Ancient City"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={carousel2}
                  alt="Ancient City"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={carousel3}
                  alt="Ancient City"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={carousel4}
                  alt="Ancient City"
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
