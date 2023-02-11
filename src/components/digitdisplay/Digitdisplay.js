import React from "react";
import "./Digitdisplay.css";
const Digitdisplay = () => {
  return (
    <div className="digitdisplay-sec">
      <div className="container-part digitdisplay-flex">
        <div className="digitdisplay-part">
          <span className="digitdisplay-number">21+</span>
          <p className="digitdisplay-txt txt-marg">Years Of Experience</p>
        </div>
        <div className="digitdisplay-part">
          <span className="digitdisplay-number">200+</span>
          <p className="digitdisplay-txt">Professional Experts</p>
        </div>
        <div className="digitdisplay-part">
          <span className="digitdisplay-number">100+</span>
          <p className="digitdisplay-txt">Satisfy Customer</p>
        </div>
      </div>
    </div>
  );
};

export default Digitdisplay;
