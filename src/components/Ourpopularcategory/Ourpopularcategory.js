import React from "react";
import images from "../../constants/images";
import "./Ourpopularcategory.css";
const Ourpopularcategory = () => {
  return (
    <div className="ourpopularcat-sec">
      <div className="container-part ourpopularcat-flex-main">
        <div className="con-ourpopularcat-part-first">
          <h1 className="h1 ourpopularcat-clr-chng">
            Our <span className="h1 ourpopularcat-clr-chng-sub">Popular</span>{" "}
            Categories
          </h1>

          <p className="ourpopularcat-txt">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="con-ourpopularcat-part-second">
          <div className="ourpopularcat-imgbox">
            <img
              src={images.pillow_pouch}
              alt=""
              className="ourpopularcat-img"
            />
            {/* <p className="ourpopularcat-img-name">Pillow Pouch</p> */}
          </div>

          <div className="ourpopularcat-imgbox">
            <img
              src={images.three_side_seal_pouch}
              alt=""
              className="ourpopularcat-img"
            />
            {/* <p className="ourpopularcat-img-name">3 Side Seal Pouch</p> */}
          </div>

          <div className="ourpopularcat-imgbox">
            <img
              src={images.quad_seal_pouch}
              alt=""
              className="ourpopularcat-img"
            />
            {/* <p className="ourpopularcat-img-name">Quad Seal Pouch</p> */}
          </div>

          <div className="ourpopularcat-imgbox">
            <img
              src={images.stand_up_pouch}
              alt=""
              className="ourpopularcat-img"
            />
            {/* <p className="ourpopularcat-img-name">Stand-up Pouch</p> */}
          </div>
          <div className="ourpopularcat-img-sec-shadow"></div>
        </div>
      </div>
    </div>
  );
};

export default Ourpopularcategory;
