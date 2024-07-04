import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './imageResizable.css';

function Resizable() {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1.5,
    centerMode:true
  };
  const images = [
    "https://i.pinimg.com/564x/17/34/fb/1734fbd295732e042e90f47cbfbab554.jpg",
    "https://i.pinimg.com/564x/a2/59/07/a2590783323a4d3dcaf235fb0ae7c295.jpg",
    "https://i.pinimg.com/564x/15/9e/29/159e29c9942128a53540210322257cd7.jpg",
    "https://i.pinimg.com/736x/cd/d0/bb/cdd0bbb9017ea3616fb24277174f0fdb.jpg",
    "https://i.pinimg.com/564x/89/6f/03/896f03995b0e9852f5bdf494a60b6f28.jpg",
    "https://i.pinimg.com/564x/58/44/c6/5844c66cc850ad6a47154c448e72438c.jpg"

];
  return (
    <div className="carousel-container">
      <h2> Resizable Collapsible </h2>
      <button className="button" onClick={() => setWidth(width + 100)}>
        {""}
        increase{" "}
      </button>
      <button className="button" onClick={() => setWidth(width - 100)}>
        {" "}
        decrease{" "}
      </button>
      <button className="button" onClick={() => setDisplay(!display)}>
        {" "}
        toggle{" "}
      </button>
      {display &&(
      <div className="div-stylo" style={{ width: `${width}px` }}>      
      
        
        <Slider {...settings}>
        {images.map((image,index)=>(
                    <div key={index} className="fit">
                        <img src={image} alt={`Slide ${index}`}style={{ width: '100%' }}/>
                    </div>
                ))} 
          </Slider>
       
         
        
      </div>
      )}
    </div>
  );
}

export default Resizable;
