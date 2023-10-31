import React, { useState } from "react";
import ProfileNavbar from "../../Components/Dashboard/ProfileNavbar";
import LeftSideCard from "../../Components/Dashboard/LeftSideCard";
import UpgradeCard from "../../Components/Dashboard/UpgradeCard";
import Matches from "./Matches";
import Activity from "./Activity";
import Search from "./Search";
import Messanger from "./Messanger";

const Dashboard = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className={`bg-[#f6f7fa] h-full ${menu ? "" : ""}`}>
      {/* <ProfileNavbar menu={menu} setMenu={setMenu} /> */}

      <div
        onClick={() => setMenu(false)}
        className=" max-w-[1250px] mx-auto flex flex-row gap-6"
      >
        {/* <LeftSideCard /> */}
        {/* <Matches /> */}
        <Activity />
        {/* <UpgradeCard /> */}
      </div>
    </div>
  );
};

export default Dashboard;
