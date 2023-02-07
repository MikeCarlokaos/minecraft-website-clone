import React, { Component } from "react";
import Slider from "react-slick";
import fauna from "../../../../assets/page/minecraftDungeons/image/heroCarousel/S3-Fauna-Faire.jpg";
import adventure from "../../../../assets/page/minecraftDungeons/image/heroCarousel/dungeons_pmp_seasonal_adventure.jpg";
import hero from "../../../../assets/page/minecraftDungeons/image/heroCarousel/pmp-dungeons-hero.jpg";
import banner from "../../../../assets/page/minecraftDungeons/image/heroCarousel/banner-gold-bg.png";
import logo from "../../../../assets/page/minecraftDungeons/image/heroCarousel/logo-dungeons.webp";
import logoAdventure from "../../../../assets/page/minecraftDungeons/image/heroCarousel/dungeons-seasonal-adventures-logo.webp";

const SamplePrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-[45%] left-10 z-10 p-4 cursor-pointer"
      onClick={onClick}
    >
      <svg width="20" height="35" fill="none" viewBox="0 0 16 26">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5.5h-5v5h-5v5h-5v5h5v5h5v5h5v-5h-5v-5h-5v-5h5v-5h5v-5z"
          fill="#FFB054"
        ></path>
      </svg>
    </div>
  );
};

const SampleNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-[45%] right-10 p-4 cursor-pointer"
      onClick={onClick}
    >
      <svg width="20" height="35" fill="none" viewBox="0 0 16 26">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.5.5h5v5h5v5h5v5h-5v5h-5v5h-5v-5h5v-5h5v-5h-5v-5h-5v-5z"
          fill="#FFB054"
        ></path>
      </svg>
    </div>
  );
};

export default class HeroCarousel extends Component {
  state = { isActive: false };

  // handleToggle = () => {
  //   this.setState({ isActive: !this.state.isActive });
  // };

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }

  render() {
    const isActive = this.state.isActive;
    const settings = {
      dots: true,
      dotsClass: "hero-dots",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

      appendDots: (dots) => (
        <div
          style={{
            position: "absolute",
            bottom: "50px",
            left: "45.3%",
            zIndex: "20",
            display: "flex",
            height: "25px",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <div className="flex flex-col items-center md:flex-row">
            <ul className="w-16 h-full flex  items-center bg-black opacity-[0.7] px-2 py-2 space-x-1">
              {dots}
            </ul>
            <div className="flex items-center">
              <div
                className=" h-[25px] bg-black opacity-[0.7] px-2 pt-1.5 flex cursor-pointer hover:brightness-50 md:pl-1 md:pr-3 md;pt-0"
                onClick={this.pause}
              >
                <svg
                  width="12"
                  height="13"
                  fill="none"
                  viewBox="0 0 11 13"
                  className={`bg-black `}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 0H0v14h4V0zm8 0H8v14h4V0z"
                    fill="#888"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 0H0v14h4V0zm8 0H8v14h4V0z"
                    fill="#FFB054"
                  ></path>
                </svg>
              </div>
              <div
                className="h-[25px] bg-black opacity-[0.7] px-2 flex items-center cursor-pointer hover:brightness-50 md:pl-1 md:pr-3"
                onClick={this.play}
              >
                <svg
                  width="12"
                  height="13"
                  fill="none"
                  viewBox="0 0 11 12"
                  className={`bg-black `}
                >
                  <path d="M0 .5l10 6-10 6V.5z" fill="#FFB054"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      ),
      customPaging: (i) => (
        <div className="w-[10px] h-[10px] flex items-center justify-center ">
          <button className="w-full h-full bg-white text-[0px]">{i + 1}</button>
        </div>
      ),
    };

    return (
      <div className="w-full h-[600px] overflow-hidden">
        <div className=" w-full h-full">
          <div className=" w-full h-full">
            <Slider
              ref={(slider) => (this.slider = slider)}
              {...settings}
              className="relative w-full h-full"
            >
              <div className="relative w-full h-full ">
                <img
                  src={fauna}
                  alt="Fauna"
                  className=" w-full h-[600px] object-cover object-top"
                />
                <div
                  style={{ backgroundImage: `url(${banner})` }}
                  className="absolute top-0 w-full h-[50px]"
                >
                  <h3 className="font-bold text-[30px] tracking-[1.4px] leading-[50px] text-center">
                    available now!
                  </h3>
                </div>
                <a
                  href="blank"
                  className="absolute bottom-28 left-1/2 -translate-x-1/2 w-32 p-2 text-center text-light-brown text-[14px] font-bold tracking-[1.4px] leading-[21px] bg-orange-primary uppercase shadow-base-button-orange-secondary hover:hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-tertiary hover:text-white"
                >
                  Learn more
                </a>
              </div>
              <div className="relative w-full h-full">
                <img
                  src={adventure}
                  alt="Seasonal Adventure"
                  className=" w-full h-[600px] object-cover"
                />
                <div className="absolute top-20 left-1/2 -translate-x-1/2">
                  <img
                    src={logoAdventure}
                    alt="Minecraft Dungeons Seasonal Adventure"
                    className="w-96"
                  />
                </div>
                <a
                  href="blank"
                  className="absolute bottom-28 left-1/2 -translate-x-1/2 w-32 p-2 text-center text-light-brown text-[14px] font-bold tracking-[1.4px] leading-[21px] bg-orange-primary uppercase shadow-base-button-orange-secondary hover:hover:bg-gradient-to-b from-base-gray to-dark-gray hover:shadow-hover-button-tertiary hover:text-white"
                >
                  Learn more
                </a>
              </div>
              <div className="relative w-full h-full ">
                <img
                  src={hero}
                  alt="Dungeon"
                  className=" w-full h-[600px] object-cover"
                />
                <div className="absolute top-20 left-1/2 -translate-x-1/2">
                  <img src={logo} alt="Minecraft Dungeons" className="w-96" />
                  <p className="w-96 text-white text-center mt-4">
                    An action-adventure game inspired by classic dungeon
                    crawlers and set in the Minecraft Universe!
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
