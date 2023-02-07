import React from "react";
import Footer from "../../components/layout/nav/Footer";
import Login from "../../components/layout/nav/Login";
import Navbar from "../../components/layout/nav/Navbar";
import Hero from "../../components/layout/minecraft/Hero";
import Update from "../../components/layout/minecraft/Update";
import SnapShot from "../../components/layout/minecraft/SnapShot";
import GameMode from "../../components/layout/minecraft/GameMode";
import Guide from "../../components/layout/minecraft/Guide";
import GamePass from "../../components/layout/minecraft/GamePass";
import Addons from "../../components/layout/minecraft/Addons";
import CrossPlay from "../../components/layout/minecraft/CrossPlay";
import open from "../../assets/icons/hamburger-icon.webp";
import close from "../../assets/icons/hamburger-icon-close.png";

const Minecraft = () => {
  return (
    <div className="w-full h-full">
      <header>
        <Login style={{ color: "#A0E080" }} />
        <Navbar
          text={"get minecraft"}
          className={"bg-dark-green shadow-base-button"}
          openIcon={open}
          closeIcon={close}
        />
      </header>
      <main>
        <Hero />
        <SnapShot />
        <Update />
        <GameMode />
        <Guide />
        <GamePass />
        <Addons />
        <CrossPlay />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Minecraft;
