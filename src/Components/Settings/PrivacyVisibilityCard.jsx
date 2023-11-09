import React from "react";

const PrivacyVisibilityCard = (props) => {
  return (
    <div className="w-[310px]">
      <div className="h-[200px] bg-white px-6 py-6 text-center flex flex-col gap-6 text-gray-600  font-sans  text-base">
        <p>{props.para1}</p>
        <p>{props.para2}</p>
        <p className="mt-5 text-blue-900">{props.para3}</p>
      </div>
      <div
        onClick={() => props.setGray(props.index)}
        className={` py-[15px] text-white text-center tracking-wide ${
          props.gray === props.index ? "bg-gray-300 font-medium" : "bg-[#d9475c]"
        }`}
      >
        {props.gray === props.index ? <p>Applied</p> : <p>Set</p>}
      </div>
    </div>
  );
};

export default PrivacyVisibilityCard;
