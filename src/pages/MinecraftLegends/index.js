import React from "react";
import Announcement from "../../components/layout/minecraftLegends/Announcement";
import Content from "../../components/layout/minecraftLegends/Content";
import Forms from "../../components/layout/minecraftLegends/Forms";
import Hero from "../../components/layout/minecraftLegends/Hero";
import News from "../../components/layout/minecraftLegends/News";
import SnapShot from "../../components/layout/minecraftLegends/SnapShot";
import Wallpaper from "../../components/layout/minecraftLegends/Wallpaper";
import Footer from "../../components/layout/nav/Footer";
import Login from "../../components/layout/nav/Login";
import Navbar from "../../components/layout/nav/Navbar";
import openLegend from "../../assets/icons/hamburger-icon-legend.svg";
import closeLegend from "../../assets/icons/hamburger-icon-close-legend.svg";

const minecraftLegends = () => {
  return (
    <div>
      <header>
        <Login style={{ color: "#95e8ff" }} />
        <Navbar
          text={"sign up"}
          className={
            "relative text-black bg-orange-light border-b-2 border-orange-dark before:content-[''] before:absolute before:bottom-1/2 before:translate-y-1/2 before:w-3 before:h-8 before:-left-3 before:bg-orange-light before:border-b-2 before:border-orange-dark after:absolute after:bottom-1/2 after:translate-y-1/2 after:w-3 after:h-8 after:-right-3 after:bg-orange-light after:border-b-2 after:border-orange-dark hover:border-transparent before:hover:bg-gradient-to-b from-light-gray to-pearl-white before:hover:text-black hover:shadow-hover-button-primary before:hover:border-transparent after:hover:bg-gradient-to-b from-light-gray to-pearl-white after:hover:text-black hover:shadow-hover-button-primary after:hover:border-transparent"
          }
          openIcon={openLegend}
          closeIcon={closeLegend}
        />
      </header>
      <main>
        <Hero />
        <SnapShot />
        <Content />
        <Wallpaper />
        <News />
        <Forms />
        <Announcement />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default minecraftLegends;
