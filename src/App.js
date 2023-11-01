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
import Setting from "./Pages/Setting"
import ReferAndEarn from "./Pages/ReferAndEarn"
import Dashboard from "./Pages/Dashboard/Dashboard";


function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/registration/profile-details" element={<ProfileDetails />} />
        <Route path="/registration/career-details" element={<CareerDetails />} />
        <Route path="/registration/lifestyle-and-family" element={<LifestyleAndFamily />} />
        <Route path="/registration/desired-partner-profile" element={<DesiredPartnerProfile/>} />
        <Route path="/registration/upload-photos" element={<UploadPhotos/>} />
        <Route path="/dashboard/my-profile" element={<UploadPhotos/>} />
        <Route path="/dashboard/desired-partner-profile" element={<UploadPhotos/>} />
        <Route path="/dashboard/matches" element={<Dashboard/>} />
        <Route path="/dashboard/activity" element={<Dashboard/>} />
        <Route path="/dashboard/search" element={<Dashboard/>} />
        <Route path="/dashboard/messenger" element={<Dashboard/>} />
        <Route path="/astrology-services" element={<AstrologyServices/>} />
        <Route path="/upgrade" element={<Upgrade/>} />
        <Route path="dashboard/setting" element={<Setting/>} />
        <Route path="/refer-and-earn" element={<ReferAndEarn/>} />
      </Routes>
    </div>
  );
}

export default App;
