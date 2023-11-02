import "./App.css";
import Home from "./Pages/Home";
import Help from "./Pages/Help";
import Footer from "./Components/Common/Footer";
import { Route, Routes } from "react-router";
import ProfileDetails from "./Pages/ProfileDetails";
import CareerDetails from "./Pages/CareerDetails";
import LifestyleAndFamily from "./Pages/LifestyleAndFamily";
import DesiredPartnerProfile from "./Pages/DesiredPartnerProfile";
import UploadPhotos from "./Pages/UploadPhotos";
import AstrologyServices from "./Pages/AstrologyServices"
import Upgrade from "./Pages/Upgrade"
import Settings from "./Pages/Dashboard/Settings"
import ReferAndEarn from "./Pages/ReferAndEarn"
import Dashboard from "./Pages/Dashboard/Dashboard";
import SuccessStories from "./Pages/SuccessStories"
import BlockedProfiles from "./Pages/Dashboard/BlockedProfiles"
import Notifications from "./Pages/Dashboard/Notifications"
import Phonebook from "./Pages/Dashboard/Phonebook"


function App() {
  return (
    <div className="App min-h-screen">
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/registration/profile-details" element={<ProfileDetails />} />
        <Route path="/registration/career-details" element={<CareerDetails />} />
        <Route path="/registration/lifestyle-and-family" element={<LifestyleAndFamily />} />
        <Route path="/registration/desired-partner-profile" element={<DesiredPartnerProfile/>} />
        <Route path="/registration/upload-photos" element={<UploadPhotos/>} />
        <Route path="/dashboard/profile" element={<Dashboard/>} />
        <Route path="/dashboard/matches" element={<Dashboard/>} />
        <Route path="/dashboard/activity" element={<Dashboard/>} />
        <Route path="/dashboard/search" element={<Dashboard/>} />
        <Route path="/dashboard/messenger" element={<Dashboard/>} />
        <Route path="/dashboard/settings" element={<Settings/>} />
        <Route path="/dashboard/blocked-profiles" element={<BlockedProfiles/>} />
        <Route path="/dashboard/notifications" element={<Notifications/>} />
        <Route path="/dashboard/Phonebook" element={<Phonebook/>} />
        <Route path="/upgrade" element={<Upgrade/>} />
        <Route path="/astrology-services" element={<AstrologyServices/>} />
        <Route path="/refer-and-earn" element={<ReferAndEarn/>} />
        <Route path="/success-stories" element={<SuccessStories/>} />
      </Routes>
    </div>
  );
}

export default App;
