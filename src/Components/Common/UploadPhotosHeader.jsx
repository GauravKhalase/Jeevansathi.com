import React from "react";
import NavbarThree from "./NavbarThree";
import bg from "../../Assets/Images/bg-image.jpg";

const UploadPhotosHeader = ({height}) => {
  return (
    <div>
      <div className=" bg-[#e7e6e6]">
        <img
          className={`z-20 absolute w-[100vw] ${height} backdrop-blur-sm`}
          src={bg}
          alt=""
        />

        <div className="w-[990px] flex flex-col justify-center item-center mx-auto ">
          <NavbarThree />
        </div>
      </div>
    </div>
  );
};

export default UploadPhotosHeader;
