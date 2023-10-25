import React from "react";
import RegistrationHeader from "../Components/Common/RegistrationHeader";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const DesiredPartnerProfile = () => {
  return (
    <div>
      <RegistrationHeader
        header={
          "Welcome Gaurav kailas Khalase ! We have set some partner preferences for you"
        }
      />
      <div className="w-[990px] flex flex-col justify-center item-center mx-auto">
        <div className="flex flex-row justify-end items-center"><Link to="/registration/upload-photos"><p>I will do this later</p></Link></div>
        <div className="flex flex-col justify-center items-center text-center">
          <p>Desired Partner Profile</p>
          <p>
            The criteria you mention here determines the ‘Desired Partner
            Matches’ you see. So please review this information carefully.
            Moreover, Filters determine whose Interests/Calls you want to
            receive.
          </p>
          <div>No. of Mutual Matches with below criteria - 8</div>
          <div className="flex flex-row items-start ">
            <input type="checkbox" name="" id="" />
            <div className="flex flex-col items-start">
              <p>
                I also want to receive matches based on the history of my
                interests and acceptances
              </p>
              <p>
                These matches may not fully fulfil your Desired Partner
                Preference.
              </p>
            </div>
          </div>
        </div>
        <div >
          <div className="flex flex-row justify-center items-center gap-6">
            <p>Basic details</p>
            <p className="flex flex-row justify-center items-center gap-[2px] text-[#d9475c] ">
              <MdEdit />
              Edit
            </p>
          </div>
          <div className="flex flex-row justify-center items-center">
            <table>
                <tr>
                    <td>Age</td>
                    <td>19-24 years</td>
                    <td>Age</td>
                    <td><button className="bg-[#d9475c]">Strict filter On</button></td>
                </tr>
            </table>            
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
        <Link to="/registration/upload-photos"><button className="bg-[#d9475c] text-white w-[220px] h-[50px] text-xl">Looks good, proceed</button></Link>
        </div>
        
        
      </div>
    </div>
  );
};

export default DesiredPartnerProfile;
