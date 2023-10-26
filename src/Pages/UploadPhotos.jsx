import React from "react";
import UploadPhotosHeader from "../Components/Common/UploadPhotosHeader";
import ProfileImage from "../Assets/Registration/5.png";
import ImageOne from "../Assets/Registration/6.png";
import ImageTwo from "../Assets/Registration/7.png";
import ImageThree from "../Assets/Registration/8.png";
import ImageFour from "../Assets/Registration/9.png";
import { FiMonitor } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

const UploadPhotos = () => {
  return (
    <div className="w-full pb-[100px] bg-[#e7e6e6]">
      <UploadPhotosHeader />
      <div className="w-[990px] mx-auto flex flex-col justify-center">
        <div className="text-right text-xs underline pt-4" >I will do this later</div>
        <div className="text-center text-xl text-gray-500 py-2">Profile with photos get 8 times more responses</div>
        <div className="flex flex-row  items-center justif-center gap-6  bg-[#f0f2f7]">
          <div>
            <img className="" src={ProfileImage} alt="" />
          </div>
          <div className="flex flex-col justify-center item-center text-center gap-6 py-4 ">
            <p className="text-2xl font-thin text-gray-600">Upload photos from</p>
            <div className="flex flex-row justify-center items-center gap-8">
              <div className="flex flex-row justify-center items-center text-white">
                <div className="bg-[#de5d70] w-[64px] h-[64px] flex justify-center items-center text-4xl"><FiMonitor /></div>
                <div className="bg-[#e15065] w-[300px] h-[64px] flex justify-center items-center text-2xl font-bold">My Computer</div>
              </div>
              <div className="flex flex-row justify-center items-center text-white">
                <div className="bg-[#536da5] w-[64px] h-[64px] flex justify-center items-center text-4xl"><FaFacebookF /></div>
                <div className="bg-[#3b5998] w-[300px] h-[64px] flex justify-center items-center text-2xl font-bold">Facebook</div>
              </div>
            </div>
            <p className="px-[100px] text-gray-500">
              Strong Photo Privacy Options | No downloads allowed | Photos are
              Watermarked Jpeg, Jpg, PNG | Upto 10MB | 20 photos only
            </p>
          </div>
        </div>
        <div>
          <p>Photo Privacy</p>
          <input type="radio" name="" id="" />
          <p>Visible to All (Recommended)</p>
          <input type="radio" name="" id="" />
          <p>Visibility only to paid members</p>
          <input type="radio" name="" id="" />
          <p>
            Visible ONLY to those you have accepted or expressed interest in.
          </p>
        </div>
        <div>
          <div>
            <p>What to avoid</p>
            <p>Do not upload photos that look like any of these</p>
          </div>
          <img src={ImageOne} alt="" />
          <img src={ImageTwo} alt="" />
          <img src={ImageThree} alt="" />
          <img src={ImageFour} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UploadPhotos;
