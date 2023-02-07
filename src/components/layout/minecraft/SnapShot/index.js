import React, { Component } from "react";
import Slider from "react-slick";
import warden from "../../../../assets/page/minecraft/images/snapshot/Warden.webp";
import allay from "../../../../assets/page/minecraft/images/snapshot/Allay.webp";
import house from "../../../../assets/page/minecraft/images/snapshot/Mangrove-House.webp";
import biome from "../../../../assets/page/minecraft/images/snapshot/Mangrove-Biome.webp";
import frog from "../../../../assets/page/minecraft/images/snapshot/Frogs.webp";
import city from "../../../../assets/page/minecraft/images/snapshot/Ancient-City.webp";

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
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2,
            arrows: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
          },
        },
      ],
    };

    return (
      <div className="w-full h-full bg-white ">
        <div className=" mx-[5%]">
          <div className=" pt-[75px] pb-[100px]">
            <h2 className="w-full text-center tracking-[1px] text-[28px] leading-[34px] font-bold mb-[50px]">
              see minecraft in action
            </h2>
            <Slider {...settings} className="relative px-[125px]">
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={warden}
                  alt="Warden"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={allay}
                  alt="Allay"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={house}
                  alt="Mangrove House"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={biome}
                  alt="Mangrove Biome"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={frog}
                  alt="Frogs"
                  className="w-full h-full px-[15px]"
                />
              </div>
              <div className="w-[190px] h-[90px] cursor-pointer">
                <img
                  src={city}
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
