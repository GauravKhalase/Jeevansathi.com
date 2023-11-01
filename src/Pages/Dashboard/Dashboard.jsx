import React, { useState } from "react";
import ProfileNavbar from "../../Components/Dashboard/ProfileNavbar";
import LeftSideCard from "../../Components/Dashboard/LeftSideCard";
import UpgradeCard from "../../Components/Dashboard/UpgradeCard";
import Matches from "./Matches";
import Activity from "./Activity";
import Search from "./Search";
import Messanger from "./Messanger";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const [menu, setMenu] = useState(false);

  const token = window.location.pathname.split("/").at(-1);
  console.log(token);

  return (
    <div className={`bg-[#f6f7fa] h-full ${menu ? "" : ""}`}>
      <ProfileNavbar menu={menu} setMenu={setMenu} />

      <div
        onClick={() => setMenu(false)}
        className=" max-w-[1250px] mx-auto flex flex-row gap-6"
      >
        <LeftSideCard />
        <div>
          {token === "matches" ? <Matches /> : <div></div>}
          {token === "activity" ? <Activity /> : <div></div>}
          {token === "search" ? <Search /> : <div></div>}
          {token === "messenger" ? <Messanger /> : <div></div>}
        </div>

        <UpgradeCard />
      </div>
    </div>
  );
};

export default Dashboard;
