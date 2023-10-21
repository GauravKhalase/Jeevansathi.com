import React from 'react'
import RegistrationNavbar from './RegistrationNavbar'
import bg from "../../Assets/Images/bgProfileDetails.jpg"
import { Link } from "react-router-dom";


const RegistrationHeader = () => {
  return (
    <div>    <div className=" bg-[#e7e6e6] h-[190px] ">
    <img
      className="z-20 fixed w-[100vw] h-[190px] backdrop-blur-sm "
      src={bg}
      alt=""
    />

    <div className="w-[990px] flex flex-col justify-center item-center mx-auto">
      <RegistrationNavbar />
      <div className=" z-50 flex flex-row justify-center mt-[135px] text-gray-400 text-[16px] font-medium ">
          <div className="fixed w-[800px] flex flex-row justify-center border-b-[1px] border-gray-400 pb-[10px]">
              <Link to="/registration/profile-details">
              <div className="mx-[70px]">Profile Details</div>
              </Link>
              
              <div className="mx-[70px]">Career Details</div>
              <div className="mx-[70px]">Lifestyle and Family</div>
        
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default RegistrationHeader