import React from "react";
import Article from "../../components/layout/minecraftDungeons/Article";
import Buy from "../../components/layout/minecraftDungeons/Buy";
import DLC from "../../components/layout/minecraftDungeons/DLC";
import GamePass from "../../components/layout/minecraftDungeons/GamePass";
import Hero from "../../components/layout/minecraftDungeons/Hero";
import HeroCarousel from "../../components/layout/minecraftDungeons/HeroCarousel";
import News from "../../components/layout/minecraftDungeons/News";
import SnapShots from "../../components/layout/minecraftDungeons/SnapShots";
import SubArticle from "../../components/layout/minecraftDungeons/SubArticle";
import Unite from "../../components/layout/minecraftDungeons/Unite";
import Footer from "../../components/layout/nav/Footer";
import Login from "../../components/layout/nav/Login";
import Navbar from "../../components/layout/nav/Navbar";

const MinecraftDungeons = () => {
  return (
    <div>
      <header>
        <Login style={{ color: "#ffb054" }} />
        <Navbar
          text={"get dungeons"}
          className={"text-black bg-orange-primary shadow-base-button-orange"}
        />
      </header>
      <main>
        <HeroCarousel />
        <SnapShots />
        <Unite />
        <Hero />
        <Article />
        <DLC />
        <SubArticle />
        <News />
        <Buy />
        <GamePass />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MinecraftDungeons;
