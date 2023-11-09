import React from "react";
import Navbar from "../Components/Common/Navbar";
import help_bg from "../Assets/Images/bg-image.jpg";

const Help = () => {
  return (
    <div className=" bg-[#e7e6e6] h-[1000px]">
      <img
        className=" absolute w-full h-[150px] backdrop-blur-sm"
        src={help_bg}
        alt=""
      />

      <div className=" w-[990px] flex flex-col justify-center item-center mx-auto">
        <Navbar margin={"mt-10"}/>
        <div className="bg-white mt-[46px]">

        </div>
      </div>
    </div>
  );
};

export default Help;
