import React from "react";
import Footer from "../../components/layout/nav/Footer";
import Login from "../../components/layout/nav/Login";
import Navbar from "../../components/layout/nav/Navbar";
import Tokens from "../../components/layout/redeem/Tokens";

const Redeem = () => {
  return (
    <div className="w-full h-full">
      <header>
        <Login style={{ color: "#A0E080" }} />
        <Navbar
          text={"get minecraft"}
          className={"bg-dark-green shadow-base-button"}
        />
      </header>
      <main>
        <Tokens />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Redeem;
