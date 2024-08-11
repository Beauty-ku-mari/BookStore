// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

function Home() {
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

export default Home;
