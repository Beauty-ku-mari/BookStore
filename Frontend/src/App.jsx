/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Freebook from "./components/Freebook";
import Cards from "./components/Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
       <Cards />
      <Footer />

    </>
  );
}

export default App;
