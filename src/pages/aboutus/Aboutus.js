import React, { useEffect } from "react";
import images from "../../constants/images";
import "./Aboutus.css";
const Aboutus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="aboutus-sec">
      <div className="aboutus-head">
        <h3 className="h2 aboutus-clr-chng">About Us</h3>
      </div>
      <div className="container-part aboutus-flex">
        <div className="aboutus-con-part">
          <p className="aboutus-txt">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Looking for a leading-edge company
            that can provide seamless and quality integration between your
            package designs and flexible packaging outcomes? Multiton Polypack
            is your one-step solution to avail a varied range of excellent
            flexible packaging products. With a expertise in providing flexible
            packaging for food and snacks, confectionery, diary products, home &
            personal care, cosmetics & fragrance, agricultural seeds,
            agrochemical, pharmaceutical, carry bags, we also provide our
            flexible packaging solutions across the globe.
          </p>

          <p className="aboutus-txt">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Based in Rajkot, India our forte lies
            in providing excellent quality single surface matt and gloss finish
            flexible packaging to a vast clientele in india and internationally.
            With a focus on customer satisfaction and quality, we are renowned
            for creating all types of pouches be it any sshape or kind such as
            standy,zipper,gusset, and more!
          </p>

          <p className="aboutus-txt">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Not only are a one of a kind company
            that cares to flexible packaging solution under one roof, our
            advanced infrastructure, industry experience, and technical know-how
            empower us to provide outstanding flexible packaging solution with
            an awe-inspiring efficiency.
          </p>
        </div>

        <div className="aboutus-imgbox">
          <img src={images.aboutus_img} className="aboutus-img" alt="" />
        </div>
      </div>

      <div className="container-part aboutus-flex abotus-video-flex">
        <div className="aboutus-con-part aboutus-video-left-part">
          <h1 className="h1 ouabtus-clr-chng-video">
            Our Industrial{" "}
            <span className="h1 ouabtus-sub-clr-chng-video heading-border">
              Quality
            </span>{" "}
            Services
          </h1>
        </div>
        <div className="aboutus-imgbox aboutus-videobox">
          <iframe
            width="525"
            height="350"
            src="https://www.youtube.com/embed/i4CIWmvl9Dw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
