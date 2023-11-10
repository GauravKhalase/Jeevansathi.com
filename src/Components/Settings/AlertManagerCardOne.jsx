import React from "react";
import SwitchCustomStyles from "../../Components/Common/SwitchCustomStyles";

const AlertManagerCardOne = (props) => {
  return (
    <div className="flex flex-row justify-between items-center w-[990px] h-[100px] bg-white border-[1px] border-gray-400 px-8 ">
      <div className="flex flex-row justify-center items-center gap-4">
        <p className="w-[150px] text-blue-gray-900 text-base">{props.text1}</p>
        <p className="w-[550px] text-gray-600">{props.text2}</p>
      </div>
      <SwitchCustomStyles />
    </div>
  );
};

export default AlertManagerCardOne;
