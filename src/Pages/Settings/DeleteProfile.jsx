import { input } from "@material-tailwind/react";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const DeleteProfile = () => {
  const dropdowns = [
    {
      Head: "Not satisfied with services",
      first: "first",
    },
    {
      Head: "Marry Later/ Create profile later",
    },
    {
      Head: "Profile/Privacy Issue",
    },
    {
      Head: "Other Reasons",
    },
  ];

  const first = [
    "Irrelavent Matches",
    "Irrelavent Matches",
    "Irrelavent Matches",
    "Irrelavent Matches",
  ];
  const second = [
    "Irrelavent Matches 2",
    "Irrelavent Matches 2",
    "Irrelavent Matches 2",
    "Irrelavent Matches 2",
  ];
  const third = [
    "Irrelavent Matches 3",
    "Irrelavent Matches 3",
    "Irrelavent Matches 3",
    "Irrelavent Matches 3",
  ];

  const [drop, setDrop] = useState(-1);

  return (
    <div className="w-[480px] flex flex-col mx-auto">
      <div className="w-full flex flex-col  items-center bg-white px-6 py-6 pb-20">
        <div>
          <p className="text-2xl font-semibold text-gray-800 mb-1">
            Looks like this is goodbye!
          </p>
          <p className="text-[14px] text-gray-700 mb-2">
            Before you go, help us understand why you have decided to delete
            your account permanently
          </p>
        </div>
        <div className="w-full">
          {dropdowns.map((item, index) => {
            return (
              <div>
                <div
                  onClick={() => {
                    setDrop(index);
                  }}
                  className="flex flex-row justify-between items-center pt-5 pb-1 border-b-[1px] border-gray-300"
                >
                  <div className="text-gray-600 text-[15px] font-semibold font-sans tracking-wide">
                    {item.Head}
                  </div>
                  <RiArrowDropDownLine color="#808080" size={30} />
                </div>
                <div className="mt-4">
                  {drop === index && drop === 0 ? (
                    <div>
                      {first.map((item, index) => {
                        return <div>{item}</div>;
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {drop === index && drop === 1 ? (
                    <div>
                      {second.map((item, index) => {
                        return <div>{item}</div>;
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {drop === index && drop === 2 ? (
                    <div>
                      {third.map((item, index) => {
                        return <div>{item}</div>;
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {drop === index && drop === 3 ? (
                    <input
                      className="w-full h-[100px] border-[1px] border-gray-500"
                      type="textarea"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <button className="w-full bg-[#d9475c] py-2 rounded-lg my-8 text-white tracking-wide ">
          Continue Deleting
        </button>
      </div>
    </div>
  );
};

export default DeleteProfile;
