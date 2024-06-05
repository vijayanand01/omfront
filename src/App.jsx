import React from "react";
import {
  BrowserRouter as Router,
  
  Route,
  
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Vehicles from "./components/Vehicles";
import VehicleList from "./components/VehicleList";
import VehicleDetails from "./components/VehicleDetails/VehicleDetails";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import VehicleForm from "./components/VehicleForm";
  

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/vehicle" element={<Vehicles />}></Route>
          <Route path="/create" element={<VehicleForm/>}></Route>
          {/* <Route path="/vehiclecard" element={<VehicleCard/>}></Route> */}
          
          <Route path="/vehicledetails" element={<VehicleDetails/>}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/gg">
            <Home />
          </Route> */}
        </Routes>
        
      </Router>
      <Footer />
    </>
  );
}

export default App;
