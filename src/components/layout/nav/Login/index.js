import React from "react";

const Login = ({ style }) => {
  return (
    <nav
      style={style}
      className="hidden w-full bg-black justify-end  text-xs font-bold uppercase py-[9px] px-16 md:flex"
    >
      <div className=" px-3 transition ease-in-out hover:text-white">
        <a href="login">Log in</a>
      </div>
      <div className="h-[18px] px-3 transition ease-in-out hover:text-white">
        <a href="redeem">Redeem</a>
      </div>
    </nav>
  );
};

export default Login;
