import React from "react";
import images from "../../constants/images";
import "./Industriesserve.css";
const Industriesserve = () => {
  return (
    <div className="Industriesserve-sec">
      <div className="container-part Industriesserve-flex">
        <div className="inner-flex">
          <div className="industries-part-first">
            <div className="indust-name-box1">
              <img src={images.indus_icon_1} alt="" className="indus-icon" />
              <p className="industry-name">F.M.C.G & CONFECTIONERY</p>
            </div>

            <div className="indust-name-box2">
              <img src={images.indus_icon_2} alt="" className="indus-icon" />
              <p className="industry-name">AUTOMOBILE & ENGINEERING</p>
            </div>

            <div className="indust-name-box3">
              <img src={images.indus_icon_3} alt="" className="indus-icon" />
              <p className="industry-name">PHARMACEUTICAL INDUSTRIES</p>
            </div>

            <div className="indust-name-box4">
              <img src={images.indus_icon_4} alt="" className="indus-icon" />
              <p className="industry-name">AGRICULTURE SEEDS & FERTILIZER</p>
            </div>
          </div>

          <div className="industries-part-second">
            <h2 className="h2 indus-head-clr-chng">
              <span className="h2 indus-sub-head-clr-chng heading-border">
                Industries
              </span>
              {/* <br /> */}
              &nbsp; We Serve
            </h2>
          </div>
        </div>

        <div className="industries-part-third">
          <div className="indust-name-box11">
            <img src={images.indus_icon_5} alt="" className="indus-icon" />
            <p className="industry-name">AGARBATTI & PERFUMERY</p>
          </div>

          <div className="indust-name-box22">
            <img src={images.indus_icon_6} alt="" className="indus-icon" />
            <p className="industry-name">TEA & COFFEE PACKING</p>
          </div>

          <div className="indust-name-box33">
            <img src={images.indus_icon_7} alt="" className="indus-icon" />
            <p className="industry-name">
              HOME & PERSONAL <br />
              CARE PRODUCTS
            </p>
          </div>

          <div className="indust-name-box44">
            <img src={images.indus_icon_8} alt="" className="indus-icon" />
            <p className="industry-name">SPICES & PULSES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industriesserve;
