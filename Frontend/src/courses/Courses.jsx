// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
import Paid from "./Paid";
// 

function Courses() {
  return (
    <>
      <Navbar />
<div className="min-h-screen">
      <Course />
       <Paid/>
</div>
      <Footer />
    </>
  );
}

export default Courses;
