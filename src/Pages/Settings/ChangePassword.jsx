import React from "react";

const ChangePassword = () => {
  return (
    <div className="w-[450px] flex flex-col mx-auto mb-16">
      <div className="w-full bg-white flex flex-col items-center gap-8 pt-12 px-12 pb-8">
        <input className="border-[1px] border-gray-400 w-full h-[44px] px-4" placeholder="Current Password" type="text" />
        <input className="border-[1px] border-gray-400 w-full h-[44px] px-4" placeholder="New Password" type="text" />
        <input className="border-[1px] border-gray-400 w-full h-[44px] px-4" placeholder="Re-Enter New Password" type="text" />
      </div>
      <div className="w-full h-[52px] flex flex-col justify-center items-center bg-[#d9475c] text-white font-thin tracking-wide">Save New Password</div>
    </div>
  );
};

export default ChangePassword;
