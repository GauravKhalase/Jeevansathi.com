import React from "react";
import logo from "../../Assets/Common/desktopLogo.svg";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className=" relative w-full h-[64px] bg-[#334759] mx-auto flex flex-row justify-between">
      <div className="flex flex-row justify-between gap-8">
        <div className="w-[165px] bg-white flex justify-center items-center ">
          <img className="h-[64px] m-auto" src={logo} alt="" />
        </div>

        <div className="flex flex-row justify-center items-center text-white text-sm font-semibold uppercase sans-serif gap-12">
          <div className="flex flex-row justify-center items-center gap-1">
            <p>Browse profiles by</p>
            <div className="h-[20px] w-[20px]">
              <BiChevronDown fontSize={20} color="white" fontWeight="thin" />
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <p>Search</p>
            <div className="h-[20px] w-[20px]">
              <BiChevronDown fontSize={20} color="white" fontWeight="thin" />
            </div>
          </div>
          <div>Help</div>
        </div>
      </div>
      <div className="flex justify-center items-center px-[50px] text-white text-sm font-semibold uppercase sans-serif">
        Login
      </div>
    </div>
  );
};

export default Navbar;
