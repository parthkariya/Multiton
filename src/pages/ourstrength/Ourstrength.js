import React, { useEffect } from "react";
import images from "../../constants/images";
import "./Ourstrength.css";
const Ourstrength = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ourstrength-sec">
      <div className="aboutus-head">
        <h3 className="h2 aboutus-clr-chng">Our Strength</h3>
        <p className="ourstrength-head-txt">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="container-part ourstrenght-flex">
        <div className="ourstrength-box ourstrngth-flex-reverse">
          <div className="ourstrength-box-txt">
            <p className="ourstrength-head">Demo Testing</p>
            <p className="ourstrength-txt">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <div className="ourstrength-box-img-box">
            <img
              src={images.ourstrength_img_1}
              alt=""
              className="ourstrength-img"
            />
          </div>
        </div>

        <div className="ourstrength-box">
          <div className="ourstrength-box-img-box">
            <img
              src={images.ourstrength_img_2}
              alt=""
              className="ourstrength-img"
            />
          </div>
          <div className="ourstrength-box-txt">
            <p className="ourstrength-head">Demo Testing</p>
            <p className="ourstrength-txt">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>

        <div className="ourstrength-box ourstrngth-flex-reverse">
          <div className="ourstrength-box-txt">
            <p className="ourstrength-head">Demo Testing</p>
            <p className="ourstrength-txt">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <div className="ourstrength-box-img-box">
            <img
              src={images.ourstrength_img_3}
              alt=""
              className="ourstrength-img"
            />
          </div>
        </div>

        <div className="ourstrength-box">
          <div className="ourstrength-box-img-box">
            <img
              src={images.ourstrength_img_4}
              alt=""
              className="ourstrength-img"
            />
            {/* <div className="ourstrength-box-img-shadow"></div> */}
          </div>
          <div className="ourstrength-box-txt">
            <p className="ourstrength-head">Demo Testing</p>
            <p className="ourstrength-txt">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourstrength;
