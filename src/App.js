import React from "react";
import "./App.css";

import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Landingpage from "./pages/landingpage/Landingpage";
import { Footer, Navbar } from "./common";
import { Aboutus, Contactus, Ourstrength, Products } from "./pages";
const App = () => {
  return (
    <>
      {/* <BrowserRouter basename="kk"> */}
      <BrowserRouter basename="multiton">
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Landingpage />} />
          {/* <Route path="/pinewoodsingle" element={<PinewoodResortSing />} /> */}
          <Route path="/about" element={<Aboutus />} />
          <Route path="/products" element={<Products />} />
          <Route path="/ourstrength" element={<Ourstrength />} />
          <Route path="/contactus" element={<Contactus />} />
          {/* <Route path="/wedding" element={<WedAndRes />} />
          <Route path="/form" element={<Form />} />
          <Route path="/PlacesPage" element={<PlacesPage />} />
          <Route path="/hotelpage" element={<HotelPage />} />
          <Route path="/commingsoon" element={<CommingSoon />} />
          <Route path="partnerwithus" element={<PartnerWithUs />} />
          <Route path="contactus" element={<ContactUs />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
