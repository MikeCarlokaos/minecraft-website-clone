import React from "react";
import Footer from "../../components/layout/nav/Footer";
import Login from "../../components/layout/nav/Login";
import Navbar from "../../components/layout/nav/Navbar";
import creeper from "../../assets/page/nopage/creeper.webp";

const NoPage = () => {
  return (
    <div className="w-full h-full">
      <header>
        <Login style={{ color: "#A0E080" }} />
        <Navbar
          text={"get minecraft"}
          className={"bg-dark-green shadow-base-button"}
        />
      </header>
      <main className="bg-white">
        <section className="w-full h-full flex flex-col items-center py-16">
          <div>
            <img src={creeper} alt="creeper" />
          </div>
          <div>
            <h1 className="font-bold text-[50px] mb-5">No Page Found</h1>
          </div>
          <div>{/* <a href="javascript:history.back()">Return</a> */}</div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default NoPage;
