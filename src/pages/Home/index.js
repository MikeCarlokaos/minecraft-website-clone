import React from "react";
import Articles from "../../components/layout/home/Articles";
import Games from "../../components/layout/home/Games";
import CommunityCreations from "../../components/layout/home/CommunityCreations";
import Footer from "../../components/layout/nav/Footer";
import Hero from "../../components/layout/home/Hero";
import Login from "../../components/layout/nav/Login";
import Navbar from "../../components/layout/nav/Navbar";
import News from "../../components/layout/home/News";
import NavbarSm from "../../components/layout/nav/NavbarSm";

const Home = () => {
  return (
    <div className="w-full h-full">
      <header>
        <Login style={{ color: "#A0E080" }} />
        <Navbar
          text={"get minecraft"}
          className={"bg-dark-green shadow-base-button"}
        />
        <NavbarSm />
      </header>
      <main>
        <Hero />
        <Games />
        <News />
        <Articles />
        <CommunityCreations />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
