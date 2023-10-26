import React from "react";
import logo from "../../Assets/Common/desktopLogo.svg";
import { NavbarThree } from "../../Data/NavbarThree";
import { SlBell } from "react-icons/sl";
import Image from "../../Assets/Registration/5.png";

const UploadPhotosNavbar = () => {
  return (
    <div>
      <div className="relative top-9 z-50 w-[990px] h-[64px] bg-[#36495c] mx-auto flex flex-row justify-between">
        <div className="flex flex-row gap-8">
          <div className="w-[165px] bg-white">
            <img className="h-[64px] m-auto" src={logo} alt="" />
          </div>

          <div className="flex flex-row justify-center items-center gap-8">
            {NavbarThree.map((ele, index) => {
              return (
                <div className="  text-white text-sm uppercase sans-serif font-thin">
                  {ele.name}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-8 px-8">
          <div className="text-white text-lg ">
            <SlBell />
          </div>
          <div>
            <img
              className="w-[45px] h-[45px] rounded-full"
              src={Image}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPhotosNavbar;
