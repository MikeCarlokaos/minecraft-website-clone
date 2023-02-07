import React from "react";
import LoginForm from "../../components/layout/login/LoginForm";
import Footer from "../../components/layout/nav/Footer";
import Login from "../../components/layout/nav/Login";
import Navbar from "../../components/layout/nav/Navbar";
import open from "../../assets/icons/hamburger-icon.webp";
import close from "../../assets/icons/hamburger-icon-close.png";

const LoginPage = () => {
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
        <LoginForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LoginPage;
