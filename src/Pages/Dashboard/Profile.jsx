import React from "react";
import Dummy from "../../Assets/Dashboard/Dummy.png";

const Profile = () => {
  return (
    <div>
      <div className="relative w-full h-[360px]">
        <img className="absolute" src={Dummy} alt="" />
        <div className="absolute flex flex-row gap-4 text-white top-5 right-0 mx-8 ">
          <div className="p-2 bg-black rounded-full bg-opacity-50">
            {/* <BiPhotoAlbum /> */}
          </div>
          <div className="p-2 bg-black rounded-full bg-opacity-50">
            {/* <BsThreeDotsVertical /> */}
          </div>
        </div>
        <div className="absolute text-left text-white bottom-0 mx-8">
          <div className="my-4 flex flex-col gap-1">
            <p className="text-sm font-sans font-normal tracking-wide">
              Last seen on 30-0ct-23
            </p>
            <p className="text-2xl font-sans font-bold tracking-wide">
              Savita Shrimant Gaikwad, 21
            </p>
            <p className="text-sm font-sans font-medium tracking-wide">
              ID - VSUV3519
            </p>
          </div>

          <div className="flex flex-row justify-start items-end gap-8">
            <button className="text-sm font-sans font-bold tracking-wide border-b-[3px] border-[#d8465c] px-2 py-2">
              {" "}
              About Me
            </button>
            <button className="text-sm font-sans text-gray-300 font-medium tracking-wide mb-[3px]  px-2 py-2">
              {" "}
              Family
            </button>
            <button className="text-sm font-sans text-gray-300 font-medium tracking-wide mb-[3px] px-2 py-2">
              {" "}
              Looking For
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
