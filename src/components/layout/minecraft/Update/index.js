import React, { Component } from "react";
import Slider from "react-slick";
import bgLight from "../../../../assets/images/background/bg-wool-light.avif";
import updates from "../../../../data/page/minecraft/updates";
import UpdateCarousel from "../../../common/minecraft/UpdateCarousel";

const SamplePrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/3 left-20 bg-dark-green p-4 cursor-pointer shadow-base-button hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-secondary"
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
      className="absolute top-1/3 right-20 bg-dark-green p-4 cursor-pointer shadow-base-button hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-secondary"
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

const UpdateSlide = updates.map((update) => {
  return <UpdateCarousel key={update.id} {...update} />;
});

export default class Update extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <div
        style={{ backgroundImage: `url(${bgLight})` }}
        className="w-full h-full"
      >
        <div className=" mx-[5%]">
          <div className="  pt-[75px] pb-[100px]">
            <h2 className="w-full text-center tracking-[1px] text-[28px] leading-[34px] font-bold mb-[20px]">
              always something new
            </h2>
            <p className="w-full text-center mb-[50px]">
              New tools, locations, and spaces are yours to explore, thanks to
              our regular updates. Check out the latest.
            </p>
            <Slider {...settings} className="relative px-[140px]">
              {UpdateSlide}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
