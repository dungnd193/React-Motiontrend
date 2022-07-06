import React from "react";
import InstagramIcon from "src/assets/image/instagram-icon.png";
import FacebookIcon from "src/assets/image/facebook-icon.png";
import YoutubeIcon from "src/assets/image/youtube-icon.png";
import DownArrowIcon from "src/assets/image/down-arrow-icon.png";
import BlackLogoImg from "src/assets/image/black-logo-icon.png";

const Footer = () => {
  return (
    <footer className="mt-[76px]">
      <div className="px-[30px] py-[14px] bg-secondary flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-x-[30px] mb-3 sm:mb-0">
          <span className="text-sm text-white font-medium">Contact</span>
          <span className="text-xs text-white font-extralight">
            motiontrend@test.com
          </span>
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center">
          <span className="text-xs text-[#9b9b9b] font-extralight">
            @ Motiontrend. All rights reserved.
          </span>
          <div className="flex items-center gap-x-4 sm:ml-[30px] mb-3 sm:mb-0">
            <div className="w-4">
              <img src={InstagramIcon} alt="instagram" className="w-full" />
            </div>
            <div className="w-2">
              <img src={FacebookIcon} alt="facebook" className="w-full" />
            </div>
            <div className="w-4">
              <img src={YoutubeIcon} alt="youtube" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-[30px] py-[14px] flex justify-between items-center flex-col-reverse sm:flex-row">
        <ul className="flex flex-col justify-center sm:flex-row items-ceter gap-x-10">
          <li className="text-xs text-secondary font-light cursor-pointer text-center">
            Introduction
          </li>
          <li className="text-xs text-secondary font-light cursor-pointer text-center">
            Terms of Service
          </li>
          <li className="text-xs text-secondary font-light cursor-pointer flex items-center justify-center">
            Language
            <img
              src={DownArrowIcon}
              alt=""
              className="w-[10px] h-[10px] mt-1 ml-[5px]"
            />
          </li>
          <li className="text-xs text-secondary font-light cursor-pointer text-center">
            Customer Service
          </li>
        </ul>
        <div className="max-w-[180px] w-full mb-3 sm:mb-0">
          <img src={BlackLogoImg} alt="logo" className="w-full" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
