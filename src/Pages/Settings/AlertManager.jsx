import React from "react";

import AlertManagerCardOne from "../../Components/Settings/AlertManagerCardOne"

const AlertManager = () => {
  const mail = [
    {
      text1: "Membership Mails",
      text2:
        "Receive mails from Jeevansathi about membership options and offers",
    },
    {
      text1: "Membership Mails",
      text2:
        "Receive mails from Jeevansathi about membership options and offers",
    },
    {
      text1: "Membership Mails",
      text2:
        "Receive mails from Jeevansathi about membership options and offers",
    },
    {
      text1: "Membership Mails",
      text2:
        "Receive mails from Jeevansathi about membership options and offers",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="text-center ">
          <p className="text-lg text-gray-900 pb-6">Mail Alerts</p>
          <p className="text-[14px] font-thin text-gray-700">
            You are receiving these Emails on your registered Email ld -
            dummyemail@gmail.com
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-row justify-between items-center w-[990px] h-[90px] bg-white border-[1px] border-gray-400 px-8 gap-8">
            <div className="w-[150px] text-blue-gray-900 text-base">
              Match Alert Mails
            </div>
            <div className="text-gray-600">
              Receive mails where Jeevansathi recommends a profile to you.
            </div>
            <div className="flex flex-row gap-4">
              <button className="w-[120px] h-[40px] border-[1px] border-gray-400 text-sm">
                Daily
              </button>
              <button className="w-[120px] h-[40px] border-[1px] border-gray-400 text-sm">
                3 times/week
              </button>
              <button className="w-[120px] h-[40px] border-[1px] border-gray-400 text-sm bg-[#d9475c] text-white">
                Unsubscribe
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-[990px] h-[90px] bg-white border-[1px] border-gray-400 px-8 gap-8">
            <div className="w-[150px] text-blue-gray-900 text-base">
              Match Alert Mails
            </div>
            <div className="text-gray-600">
              Receive mails where Jeevansathi recommends a profile to you.
            </div>
            <div className="flex flex-row gap-4">
              <button className="w-[120px] h-[40px] border-[1px] border-gray-400 text-sm">
                Daily
              </button>
              <button className="w-[120px] h-[40px] border-[1px] border-gray-400 text-sm">
                3 times/week
              </button>
              <button className="w-[120px] h-[40px] border-[1px] border-gray-400 text-sm bg-[#d9475c] text-white">
                Unsubscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {mail.map((item, index) => {
            return <div kay={index}><AlertManagerCardOne text1={item.text1} text2={item.text2}/></div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default AlertManager;
