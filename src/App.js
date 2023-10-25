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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
