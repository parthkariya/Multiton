import React, { useEffect } from "react";
import "./Contactus.css";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineChrome, AiOutlineMail } from "react-icons/ai";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
const Contactus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contactus-sec">
      <div className="aboutus-head">
        <h3 className="h2 aboutus-clr-chng">Contact Us</h3>
        {/* <p className="ourstrength-head-txt">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p> */}
      </div>

      <div className="container-part">
        <div className="contactus-flex">
          <div className="contactus-flex-part">
            <p className="heading-border contactus-sub-head-mx-width h3">
              Quick Contact
            </p>
            <div className="contactus-details-flex">
              <FaMobileAlt className="footer-icon contactus-icon" />
              <a href="tel:+91 76210 02030" className="contactus-contact">
                +91 76210 02030
              </a>
            </div>

            <div className="contactus-details-flex">
              <MdOutlineEmail className="footer-icon contactus-icon " />
              <a href="info@multitonpolypack.com" className="contactus-contact">
                info@multitonpolypack.com
              </a>
            </div>

            <div className="contactus-details-flex">
              <MdLocationOn className="footer-icon contactus-icon " />
              <p className="contactus-addr">
                Plot No-220, <br />
                Aji G.I.D.C Phase-II, N-Road,
                <br /> Rajkot-36002 (Gujarat) INDIA
              </p>
            </div>

            <div className="contactus-details-flex">
              <AiOutlineChrome className="footer-icon contactus-icon" />
              <a
                href="http://www.multitonpolypack.com/"
                className="contactus-contact"
                target="_blank"
              >
                www.multitonpolypack.com
              </a>
            </div>
          </div>
          {/* <p className="heading-border contactus-sub-head-mx-width h3">
            Quick Contact
          </p> */}
          <div className="contactus-flex-part-sec-mx-width">
            <p className="heading-border contactus-sub-head-mx-width h3 contactus-form-heading-margin">
              Send Your Inquire Here
            </p>
            <div className="contactus-flex-part-sec">
              <div className="contactus-form-first-part">
                <div className="contactus-form-inner-flex">
                  <lable className="c-lbl c-lbl-first">Company Name</lable>
                  <input
                    type="text"
                    placeholder=""
                    //   value={name}
                    className="c-txt"
                    //   onChange={(e) => setname(e.target.value)}
                  />
                </div>
              </div>

              <div className="contactus-form-first-part">
                <div className="contactus-form-inner-flex">
                  <lable className="c-lbl c-lbl-first">Contact Person</lable>
                  <input
                    type="text"
                    placeholder=""
                    //   value={name}
                    className="c-txt"
                    //   onChange={(e) => setname(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="contactus-flex-part-sec">
              <div className="contactus-form-first-part">
                <div className="contactus-form-inner-flex">
                  <lable className="c-lbl">Number</lable>
                  <input
                    type="number"
                    placeholder=""
                    //   name="field-name"
                    //   value={number}
                    //   maxLength={10}
                    //   onChange={(e) => {
                    //     if (mobileValidate(e.target.value)) {
                    //       setnumber(e.target.value);
                    //     }
                    //   }}
                    className="c-txt"
                  />
                </div>
              </div>
              <div className="contactus-form-first-part">
                <div className="contactus-form-inner-flex">
                  <lable className="c-lbl">Email</lable>
                  <input
                    type="email"
                    placeholder=""
                    //   name="field-name"
                    //   value={number}
                    //   maxLength={10}
                    //   onChange={(e) => {
                    //     if (mobileValidate(e.target.value)) {
                    //       setnumber(e.target.value);
                    //     }
                    //   }}
                    className="c-txt"
                  />
                </div>
              </div>
            </div>

            <div className="contactus-flex-part-sec">
              <div className="contactus-form-first-part">
                <div className="contactus-form-inner-flex">
                  <lable className="c-lbl">Product For Packing</lable>
                  <input
                    type="text"
                    placeholder=""
                    //   value={name}
                    className="c-txt"
                    //   onChange={(e) => setname(e.target.value)}
                  />
                </div>
              </div>

              {/* <div className="contactus-form-first-part"></div> */}
              <div className="contactus-form-first-part">
                <div className="contactus-form-inner-flex">
                  <lable className="c-lbl">Material Combination</lable>
                  <input
                    type="text"
                    placeholder=""
                    //   value={name}
                    className="c-txt"
                    //   onChange={(e) => setname(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="contactus-flex-part-sec">
              <div className="contactus-form-first-part">
                <div className="contactus-form-inner-flex">
                  <lable className="c-lbl">Thickness Of Material</lable>
                  <input
                    type="text"
                    placeholder=""
                    //   value={name}
                    className="c-txt"
                    //   onChange={(e) => setname(e.target.value)}
                  />
                </div>
              </div>
              <div className="contactus-form-first-part">
                <div className="contactus-form-inner-flex">
                  <lable className="c-lbl">Pouch Size in MM</lable>
                  <input
                    type="text"
                    placeholder=""
                    //   value={name}
                    className="c-txt"
                    //   onChange={(e) => setname(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="contactus-flex-part-sec">
              <div className="contactus-form-first-part">
                <div className="contactus-form-inner-flex">
                  <lable className="c-lbl">Roll Size in MM</lable>
                  <input
                    type="text"
                    placeholder=""
                    //   value={name}
                    className="c-txt"
                    //   onChange={(e) => setname(e.target.value)}
                  />
                </div>
              </div>

              <div className="contactus-form-first-part">
                <div className="contactus-form-inner-flex">
                  <lable className="c-lbl">Types Of Pouch</lable>
                  <input
                    type="text"
                    placeholder=""
                    //   value={name}
                    className="c-txt"
                    //   onChange={(e) => setname(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="contactus-flex-part-sec">
              <div className="contactus-form-first-part">
                <div className="contactus-form-inner-flex">
                  <lable className="c-lbl">Requered Quantity in Kgs</lable>
                  <input
                    type="text"
                    placeholder=""
                    //   value={name}
                    className="c-txt"
                    //   onChange={(e) => setname(e.target.value)}
                  />
                </div>
              </div>

              <div className="contactus-form-first-part">
                <div className="contactus-form-inner-flex">
                  <lable className="c-lbl">Required Quantity in Pouches</lable>
                  <input
                    type="text"
                    placeholder=""
                    //   value={name}
                    className="c-txt"
                    //   onChange={(e) => setname(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="contactus-form-inner-flex">
              <lable className="c-lbl">Descreption</lable>
              <textarea
                placeholder=""
                // value={description}
                className="c-msg-txt"
                // onChange={(e) => setdescription(e.target.value)}
              ></textarea>
              <a
                href="javascript:void(0)"
                className="c-form-btn"
                // onClick={() => mContactus()}
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
