import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" px-[250px] bg-[#34495e] text-gray-100 flex flex-row justify-around pt-[40px] pb-[40px] ">
        <div className="">
          <p className="text-lg font-semibold pb-2">Explore</p>
          {[
            "Home",
            "Advanced search",
            "Success stories",
            "Sitemap",
            "Create Horoscope",
          ].map((ele, i) => {
            return (
              <div key={i} className="text-sm font-medium pb-2">
                {ele}
              </div>
            );
          })}
        </div>
        <div className="">
          <p className="text-lg font-semibold pb-2">Services</p>
          {[
            "Membership Options",
            "Jeevansathi Careers"
          ].map((ele, i) => {
            return (
              <div key={i} className="text-sm font-medium pb-2">
                {ele}
              </div>
            );
          })}
        </div>
        <div className="">
          <p className="text-lg font-semibold pb-2">Help</p>
          {[
            "Contact us",
            "Jeevansathi Centers (32)"
          ].map((ele, i) => {
            return (
              <div key={i} className="text-sm font-medium pb-2">
                {ele}
              </div>
            );
          })}
        </div>
        <div className="">
          <p className="text-lg font-semibold pb-2">Legal</p>
          {[
            "About Us",
            "Fraud Alert",
            "Terms of use",
            "3rd party terms of use",
            "Privacy Policy",
            "Cookie Policy",
            "Privacy Features",
            "Summons/Notices",
            "Grievances",
          ].map((ele, i) => {
            return (
              <div key={i} className="text-sm font-medium pb-2">
                {ele}
              </div>
            );
          })}
        </div>
        
      </div>

      <div>

      </div>
    </div>
  );
};

export default Footer;
