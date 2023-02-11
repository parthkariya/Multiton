import React, { useEffect, useState } from "react";
import data from "../../constants/data";
import "./Sliderhomecompany.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Sliderhomecompany = () => {
  const [images, setImages] = useState(data.imageHero);
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const lastIndex = images.length - 1;
  //   if (index < 0) {
  //     setIndex(lastIndex);
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0);
  //   }
  // }, [index, images]);

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 3000);
  //   return () => clearInterval(slider);
  // }, [index]);

  const settings = {
    // slidesToShow: 5,
    // dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autospeed: 3500,
    autoplay: true,
    // appendDots: (dots) => {
    //   return <ul style={{ margin: "5% 0" }}>{dots}</ul>;
    // },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="sliderhomecompany-sec">
        <Slider {...settings}>
          {images.map((item) => {
            const { id, imageUrl } = item;
            return (
              <>
                <div className="company-slider-imgbox">
                  <img src={imageUrl} alt="" className="client-img" />
                </div>
              </>
            );
          })}
        </Slider>
      </div>
      {/* <div style={{ paddingTop: "0px" }}>
      
        <div className="section-center">
          {images.map((image, personIndex) => {
            const { id, imageUrl } = image;
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === images.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article className={position} key={id}>
                <img src={imageUrl} alt="hotel images" className="person-img" />
              </article>
            );
          })}
          
          <div className="slider-shade"></div>
        </div>
      </div> */}
    </>
  );
};

export default Sliderhomecompany;
