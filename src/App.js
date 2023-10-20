import "./App.css";
import Home from "./Pages/Home";
import Help from "./Pages/Help";
import Footer from "./Components/Common/Footer";
import { Route, Routes } from "react-router";
import Registration from "./Pages/Registration";
import ProfileDetails from "./Pages/ProfileDetails";
import CareerDetails from "./Pages/CareerDetails";
import LifestyleAndFamily from "./Pages/LifestyleAndFamily";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/registration/profile-details" element={<ProfileDetails />} />
        <Route path="/registration/career-details" element={<CareerDetails />} />
        <Route path="/registration/lifestyle-and-family" element={<LifestyleAndFamily />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
