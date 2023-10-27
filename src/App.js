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
import Matches from "./Pages/Dashboard/Matches";
import Activity from "./Pages/Dashboard/Activity";
import Messanger from "./Pages/Dashboard/Messanger";
import Search from "./Pages/Dashboard/Search";
import AstrologyServices from "./Pages/AstrologyServices"
import Upgrade from "./Pages/Upgrade"
import Setting from "./Pages/Setting"
import ReferAndEarn from "./Pages/ReferAndEarn"


function App() {
  return (
    <div className="App">
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
        <Route path="/dashboard/matches" element={<Matches/>} />
        <Route path="/dashboard/activity" element={<Activity/>} />
        <Route path="/dashboard/search" element={<Search/>} />
        <Route path="/dashboard/messanger" element={<Messanger/>} />
        <Route path="/astrology-services" element={<AstrologyServices/>} />
        <Route path="/upgrade" element={<Upgrade/>} />
        <Route path="/setting" element={<Setting/>} />
        <Route path="/refer-and-earn" element={<ReferAndEarn/>} />
      </Routes>
    </div>
  );
}

export default App;
