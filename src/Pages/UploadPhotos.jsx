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
    <div>
      <UploadPhotosHeader />
      <div>
        <div>Profile with photos get 8 times more responses</div>
        <div>
          <img className="w-[200px]" src={ProfileImage} alt="" />
          <div>
            <p>Upload photos from</p>
            <div>
              <div>
                <FiMonitor />
                <div>My Computer</div>
              </div>
              <div>
                <FaFacebookF />
                <div>Facebook</div>
              </div>
            </div>
            <p>
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
          <p>Visible ONLY to those you have accepted or expressed interest in.</p>
        </div>
        <div>
          <div><p>What to avoid</p><p>Do not upload photos that look like any of these</p></div>
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
