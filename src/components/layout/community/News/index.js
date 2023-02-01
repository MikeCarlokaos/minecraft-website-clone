import React, { Component } from "react";
import news from "../../../../data/page/community/news";
import NewsCarousel from "../../../../components/common/community/NewsCarousel";
import Slider from "react-slick";

const SampleNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/4 -right-12 bg-dark-green p-4 cursor-pointer shadow-base-button hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-secondary"
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

const SamplePrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/4 -left-12 bg-dark-green p-4 cursor-pointer shadow-base-button hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-secondary"
      onClick={onClick}
    >
      <svg
        role="img"
        className="h-[18px] w-[18px] fill-white"
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

const NewsSlide = news.map((article) => {
  return <NewsCarousel key={article.id} {...article} />;
});

export default class News extends Component {
  render() {
    const settings = {
      dots: false,
      centerMode: true,
      centerPadding: "0px",
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <section className=" w-full h-full px-32" id="news">
        <div className="relative w-full h-full py-20">
          <h2 className="w-full text-center tracking-[1px] text-black text-[28px] leading-[34px] font-bold mb-[50px]">
            community news
          </h2>

          <Slider {...settings} className="h-full w-full">
            {NewsSlide}
          </Slider>
        </div>
      </section>
    );
  }
}