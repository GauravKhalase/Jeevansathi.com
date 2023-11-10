import React, { useState } from "react";

const HideProfile = () => {

  const [red, setRed] = useState(1);

  return (
    <div className="w-[480px] flex flex-col mx-auto">
      <div className="w-full h-[480px] flex flex-col  items-center bg-white px-10 py-8">
        <p className="text-center text-base text-gray-900 pb-5">Hide your Profile</p>
        <p className="text-center text-sm text-gray-600 tracking-wide pb-8">
          Use this feature when you have decided to stop looking temporarily
          since you are busy, moving, in the middle of some big lifestyle
          changes and cannot spare the time to look seriously.
        </p>
        <p className="text-center text-base text-gray-700 pb-4">Hide my Profile</p>
        <div className="flex flex-row justify-center gap-2 pb-8">
          <button onClick={()=>setRed(1)} className={`w-[110px] h-[44px] border-[1px] border-gray-400 text-sm ${red == 1 ? "text-white bg-[#d9475c]":""}`}>
            7 Days
          </button>
          <button onClick={()=>setRed(2)} className={`w-[110px] h-[44px] border-[1px] border-gray-400 text-sm ${red == 2 ? "text-white bg-[#d9475c]":""}`}>
            15 Days
          </button>
          <button onClick={()=>setRed(3)} className={`w-[110px] h-[44px] border-[1px] border-gray-400 text-sm ${red == 3 ? "text-white bg-[#d9475c]":""}`}>
            30 Days
          </button>
          
        </div>
        <input
          className="border-[1px] border-gray-400 w-[346px] h-[44px] px-4"
          placeholder="Re-Enter New Password"
          type="text"
        />
      </div>
      <div className="w-full h-[52px] flex flex-col justify-center items-center bg-[#d9475c] text-white font-thin tracking-wider">
        Hide my Profile
      </div>
    </div>
  );
};

export default HideProfile;
