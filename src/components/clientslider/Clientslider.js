import React, { useState } from "react";
import "./Clientslider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import images from "../../constants/images";
import data from "../../constants/data";
const Clientslider = () => {
  const [client_img, setClient_img] = useState(data.imageEvent);
  const settings = {
    // slidesToShow: 5,
    // dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
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
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings_sec = {
    // slidesToShow: 5,
    // dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="Clientslider-sec">
        <div className="Clientslider-head">
          <h3 className="h2 head-clr">
            Some Of{" "}
            <span className="h2 heading-clr-change heading-border">Our</span>{" "}
            Populer Clients
          </h3>
        </div>
        <div className="container-part">
          <p className="h3 Clientslider-sub-head">Domestic</p>
          <Slider {...settings}>
            {client_img.map((item) => {
              const { id, imageUrl } = item;
              return (
                <>
                  <div className="clientslider-imgbox">
                    <img src={imageUrl} alt="" className="client-img" />
                  </div>
                </>
              );
            })}
          </Slider>
        </div>

        <div className="container-part"></div>

        <div className="container-part">
          <p className="h3 Clientslider-sub-head Clientslider-sub-head-marg">
            Overseas Clients
          </p>
          <Slider {...settings_sec}>
            <div className="clientslider-imgbox">
              <img
                src={images.client_overseas_slider_1_img}
                alt=""
                className="client-img"
              />
            </div>

            <div className="clientslider-imgbox">
              <img
                src={images.client_overseas_slider_2_img}
                alt=""
                className="client-img"
              />
            </div>

            <div className="clientslider-imgbox">
              <img
                src={images.client_overseas_slider_3_img}
                alt=""
                className="client-img"
              />
            </div>
            <div className="clientslider-imgbox">
              <img
                src={images.client_overseas_slider_4_img}
                alt=""
                className="client-img"
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Clientslider;
