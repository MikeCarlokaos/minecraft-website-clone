import React from "react";
import youtube from "../../../../assets/icons/share/youtube-color.svg";
import insta from "../../../../assets/icons/share/insta-color.svg";
import facebook from "../../../../assets/icons/share/facebook-color.svg";
import twitter from "../../../../assets/icons/share/twitter-color.svg";
import reddit from "../../../../assets/icons/share/reddit-color.svg";
import mojangLogo from "../../../../assets/images/footer/Mojang2020Logo.png";
import xboxLogo from "../../../../assets/images/footer/XboxLogo.webp";
import esrb from "../../../../assets/images/footer/esrb_2021.svg";
import { Globe } from "react-feather";
import microsoft from "../../../../assets/images/footer/Logo_Microsoft.svg";

const Footer = () => {
  const dateYear = new Date().getFullYear();

  return (
    <section className="w-full h-full text-white text-[12px] leading-[14px] bg-body-dark">
      <div className="w-full h-full text-center bg-black pt-[19px] pb-2">
        <h3 className="w-full h-full text-[16px] leading-[24px] tracking-[1px] font-bold">
          Follow Minecraft
        </h3>
        <div>
          <ul className="flex align-center justify-center space-x-16 py-7">
            <li>
              <a href="blank">
                <img
                  src={youtube}
                  alt="youtube"
                  className="saturate-0 brightness-75 contrast-[1000%]  hover:filter-none"
                />
              </a>
            </li>
            <li>
              <a href="blank">
                <img
                  src={insta}
                  alt="insta"
                  className="saturate-0 brightness-75 contrast-[1000%]  hover:filter-none"
                />
              </a>
            </li>
            <li>
              <a href="blank">
                <img
                  src={facebook}
                  alt="facebook"
                  className="contrast-[300%] saturate-0  hover:filter-none"
                />
              </a>
            </li>
            <li>
              <a href="blank">
                <img
                  src={twitter}
                  alt="twitter"
                  className="saturate-0 brightness-75 contrast-[1000%]  hover:filter-none"
                />
              </a>
            </li>
            <li>
              <a href="blank">
                <img
                  src={reddit}
                  alt="reddit"
                  className="contrast-[300%] saturate-0  hover:filter-none"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-full py-[64px] flex flex-col-reverse gap-y-10 bg-body-dark md:w-[1140px] md:mx-auto md:flex-row md:gap-y-0">
        <div className="w-full h-full px-5 flex flex-col items-center mb-5 md:w-[42%] md:px-0 md:text-start md:block md:mb-0">
          <div className="flex">
            <div>
              <img src={mojangLogo} alt="Mojang Logo" />
            </div>
            <div className="ml-[60px]">
              <img src={xboxLogo} alt="Xbox Logo" />
            </div>
          </div>
          <p className="mt-[35px] mb-[16px]">
            Mojang &#169;2009-{dateYear}. "Minecraft" is a trademark of Mojang
            Synergies AB
          </p>
          <p className="text-[12px] leading-[13px]  text-light-green font-sans divide-x-2">
            <span className="pr-[8px]">
              <a href="blank" className="tracking-tight hover:text-white">
                View Mojang Terms and Conditions
              </a>
            </span>

            <span className="px-[8px]">
              <a href="blank" className="tracking-tight hover:text-white">
                View Mojang Brand and Assets Guidelines
              </a>
            </span>
          </p>
        </div>
        <div className="w-full h-full px-5 grid grid-cols-2 gap-5 md:w-[58%] md:flex md:px-0 md:gap-0">
          <div className="w-full h-full md:w-1/3">
            <div>
              <h3 className="text-[14.84px] font-bold leading-[24px] tracking-[1px]">
                Games
              </h3>
              <ul className="text-[12px] leading-[24px] font-sans text-light-green">
                <li>
                  <a href="/minecraft" className=" hover:text-white">
                    Minecraft
                  </a>
                </li>
                <li>
                  <a href="/minecraft-dungeons" className=" hover:text-white">
                    Minecraft Dungeons
                  </a>
                </li>
                <li>
                  <a href="/minecraft-legends" className=" hover:text-white">
                    Minecraft Legends
                  </a>
                </li>
                <li>
                  <a href="/minecraft-education" className=" hover:text-white">
                    Minecraft: Education Edition
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[14.84px] font-bold leading-[24px] tracking-[1px] mt-[20px]">
                Community
              </h3>
              <ul className="text-[12px] leading-[24px] font-sans text-light-green">
                <li>
                  <a href="/community" className=" hover:text-white">
                    Community
                  </a>
                </li>
                <li>
                  <a href="blank" className=" hover:text-white">
                    Creator Learning Portal
                  </a>
                </li>
                <li>
                  <a href="blank" className=" hover:text-white">
                    Mojang Studios Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full h-full md:w-1/3">
            <div>
              <h3 className="text-[14.84px] font-bold leading-[24px] tracking-[1px]">
                Shop
              </h3>
              <ul className="text-[12px] leading-[24px] font-sans text-light-green">
                <li>
                  <a href="blank" className=" hover:text-white">
                    Marketplace
                  </a>
                </li>
                <li>
                  <a href="blank" className=" hover:text-white">
                    Minecraft Shop
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[14.84px] font-bold leading-[24px] tracking-[1px] mt-[20px]">
                Support
              </h3>
              <ul className="text-[12px] leading-[24px] font-sans text-light-green">
                <li>
                  <a href="blank" className=" hover:text-white">
                    Discussions & Help
                  </a>
                </li>
                <li>
                  <a href="blank" className=" hover:text-white">
                    Feedback
                  </a>
                </li>
                <li>
                  <a href="blank" className=" hover:text-white">
                    Site Map
                  </a>
                </li>
                <li>
                  <a href="blank" className=" hover:text-white">
                    Download
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[14.84px] font-bold leading-[24px] tracking-[1px] mt-[20px]">
                Account
              </h3>
              <ul className="text-[12px] leading-[24px] font-sans text-light-green">
                <li>
                  <a href="blank" className=" hover:text-white">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="blank" className=" hover:text-white">
                    Redeem
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <img src={esrb} alt="esrb" />
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-footer-dark ">
        <div className="w-full h-full mx-auto py-[32px] px-5 flex flex-col items-center justify-between space-y-2 md:w-[1140px] md:flex-row md:items-start md:px-0 md:space-y-0">
          <div>
            <label
              htmlFor="language"
              className="flex items-center text-[12px] leading-[24px] font-sans "
            >
              <Globe className="mr-2" /> English(United States)
            </label>
          </div>
          <div>
            <ul className="flex text-[12px] leading-[24px] font-sans space-x-2 whitespace-nowrap md:space-x-4 ">
              <li>
                <a href="blank">Privacy and Cookies</a>
              </li>
              <li>
                <a href="blank">Term of use</a>
              </li>
              <li>
                <a href="blank">Trademarks</a>
              </li>
              <li>
                <a href="blank">About our ads</a>
              </li>
              <li>&#169; {dateYear} Microsoft</li>
            </ul>
          </div>
          <div>
            <img src={microsoft} alt="Microsoft Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
