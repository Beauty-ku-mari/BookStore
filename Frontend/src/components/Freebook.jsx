// eslint-disable-next-line no-unused-vars
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json";

function Freebook() {
const filterData = list.filter((data) => data.category === "Free");

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
return (
   <>
<div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
<h1 className='font-semibold text-xl pb-2'> Free Offered Courses</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum unde dolorem blanditiis nulla obcaecati corporis temporibus ipsa eius optio. Laborum eaque veniam nihil, odio est ducimus! Vitae vero cum et?</p>
</div>
</>
  )
}

export default Freebook;
