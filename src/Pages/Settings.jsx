import React from "react";
import ProfileVisibility from "./Settings/ProfileVisibility";
import AlertManager from "./Settings/AlertManager";
import HideProfile from "./Settings/HideProfile";
import DeleteProfile from "./Settings/DeleteProfile";
import ChangePassword from "./Settings/ChangePassword";
import { Link } from "react-router-dom";
import Footer from "../Components/Common/Footer"

import UploadPhotosHeader from "../Components/Common/UploadPhotosHeader";

const Settings = () => {
  const token = window.location.pathname.split("/").at(-1);
  console.log(token);

  const settings = [
    {
      id: 1,
      title: "Privacy Visibility",
      token: "profile-visibility",
      link: "/settings/profile-visibility",
    },
    {
      id: 2,
      title: "Alert Manager",
      token: "alert-manager",
      link: "/settings/alert-manager",
    },
    {
      id: 3,
      title: "Hide Profile",
      token: "hide-profile",
      link: "/settings/hide-profile",
    },
    {
      id: 4,
      title: "Delete Profile",
      token: "delete-profile",
      link: "/settings/delete-profile",
    },
    {
      id: 5,
      title: "Change Password",
      token: "change-password",
      link: "/settings/change-password",
    },
  ];

  return (
    <div className=" absolute w-full bg-[#e7e6e6]">
      <UploadPhotosHeader height="h-[150px]" />
      <div className=" mt-[88px] w-[990px] mx-auto flex flex-col justify-center">
        <div className="flex flex-row justify-around items-center bg-white">
          {settings.map((items) => {
            return <div className={`   ${items.id === 5 ? "":"border-r-2 border-gray-300"} `} key={items.id}>
              <Link to={items.link}>
                <div className={` flex flex-col justify-center items-center text-base tracking-wide text-gray-800 font-thin py-3 w-[196px]`}>{items.title}</div>
              </Link>
              {token === items.token ? <div className="w-full h-[1.5px] bg-gray-800"></div>:<div className="w-full h-[1px]"></div>}
            </div>;
          })}
        </div>
        <div className="py-8">
          {token === "profile-visibility" ? <ProfileVisibility /> : <div></div>}
          {token === "alert-manager" ? <AlertManager /> : <div></div>}
          {token === "hide-profile" ? <HideProfile /> : <div></div>}
          {token === "delete-profile" ? <DeleteProfile /> : <div></div>}
          {token === "change-password" ? <ChangePassword /> : <div></div>}
        </div>
        
      </div>
      <Footer/>
    </div>
  );
};

export default Settings;
