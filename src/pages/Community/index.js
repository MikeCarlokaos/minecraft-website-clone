import React from "react";
import Disccusions from "../../components/layout/community/Disscusion&Help";
import Feedback from "../../components/layout/community/Feedback";
import Hero from "../../components/layout/community/Hero";
import News from "../../components/layout/community/News";
import Resources from "../../components/layout/community/Resources";
import Stream from "../../components/layout/community/Stream";
import TownHall from "../../components/layout/community/TownHall";
import Footer from "../../components/layout/nav/Footer";
import Login from "../../components/layout/nav/Login";
import Navbar from "../../components/layout/nav/Navbar";
import open from "../../assets/icons/hamburger-icon.webp";
import close from "../../assets/icons/hamburger-icon-close.png";

const Community = () => {
  return (
    <div className="w-full h-full  bg-dirty-white-tertiary">
      <header>
        <Login style={{ color: "#a0e080" }} />
        <Navbar
          text={"get minecraft"}
          className={"bg-dark-green shadow-base-button"}
          openIcon={open}
          closeIcon={close}
        />
      </header>
      <main>
        <Hero />
        <News />
        <TownHall />
        <Resources />
        <Stream />
        <Disccusions />
        <Feedback />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Community;
