import React from "react";
import images from "../../constants/images";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero-sec">
        <div className="hero-flex-part">
          <div className="con-part-first">
            {/* <div className="hero-big-txt-imgbox">
              <img
                src={images.hero_big_txt_img}
                alt=""
                className="hero-big-txt-img"
              />
            </div>
            <p className="hero-txt">
              State Of The Art Ifrastructure For Complete <br /> Flexible
              Pckaging Solution.
            </p> */}
          </div>

          <div className="con-part-sec">
            {/* <div className="hero-ingbox">
              <img
                src="https://northstarpkg.com/wp-content/uploads/2018/01/311-2.jpg"
                alt=""
                className="hero-img"
              />
              <div className="hero-img-shade"></div>
            </div> */}
          </div>
          <div className="hero-inner-full-width">
            <div className="container-part hero-inner-container-flex">
              <div className="hero-inner-first-part">
                <div className="hero-big-txt-imgbox">
                  <img
                    src={images.hero_big_txt_img}
                    alt=""
                    className="hero-big-txt-img"
                  />
                </div>
                <p className="hero-txt">
                  State Of The Art Ifrastructure For Complete <br /> Flexible
                  Pckaging Solution.
                </p>
              </div>
              <div className="hero-inner-first-part">
                <div className="hero-ingbox">
                  <img
                    // src="https://northstarpkg.com/wp-content/uploads/2018/01/311-2.jpg"
                    src={images.hero_machine_img}
                    alt=""
                    className="hero-img"
                  />
                  {/* <div className="hero-img-shade"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
