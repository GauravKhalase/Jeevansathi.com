import React from "react";
import { Carousel } from "@material-tailwind/react";
import ProfileNavbar from "../../Components/Dashboard/ProfileNavbar";
import LeftSideCard from "../../Components/Dashboard/LeftSideCard";
import UpgradeCard from "../../Components/Dashboard/UpgradeCard";
import Dummy from "../../Assets/Dashboard/Dummy.png";
import { CarouselDefault } from "../../Components/Dashboard/CarouselDefault";

import { BiStar,BiMailSend } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import { GrMailOption } from "react-icons/gr";

const Matches = () => {
  return (
    <div className="relative top-[98px] w-[650px] bg-white border-[0.5px] border-gray-200 rounded-lg flex flex-col justify-center items-center mb-32">
      <CarouselDefault />
      <div className="fixed bottom-6 z-50 w-[600px] flex flex-row justify-around items-center bg-[#d8465c] py-4 rounded-lg text-white">
        <div className="flex flex-col justify-center items-center gap-2 w-[100px]"> 
          <BiMailSend size={22}/>
          <p className="text-xs font-sans font-bold tracking-wide">Send Interest</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-[100px]">
          <BiStar  size={22}/>
          <p className="text-xs font-sans font-bold tracking-wide">Shortlist</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-[100px]">
          <BsChat  size={20}/>
          <p className="text-xs font-sans font-bold tracking-wide">Chat</p>
        </div>
      </div>
    </div>
  );
};

export default Matches;
