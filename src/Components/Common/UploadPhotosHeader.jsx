import React from "react";
import NavbarThree from "./NavbarThree";
import bg from "../../Assets/Help/bg-image.jpg";
import { Link } from "react-router-dom";

const UploadPhotosHeader = ({ header }) => {
  return (
    <div>
      <div className=" bg-[#e7e6e6] h-[190px] ">
        <img
          className="z-20 absolute w-[100vw] h-[200px] backdrop-blur-sm "
          src={bg}
          alt=""
        />

        <div className="w-[990px] flex flex-col justify-center item-center mx-auto">
          <NavbarThree />
          <div className=" absolute z-50  flex flex-row justify-center mt-[240px]  text-[16px] font-medium ">
            <div className=" w-[990px] flex flex-row justify-center item-center">
              <p className=" text-[20px] text-gray-100 font-thin tracking-wide">
                Smile Please!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPhotosHeader;
