import React from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import "./Footer.css";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaMobileAlt,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineChrome } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <footer className="footer-main">
        <div className="footer-con">
          <div className="footer-first-part">
            <div className="footer-logobox">
              <Link to="/">
                <img
                  src={images.logo}
                  alt="Company Logo"
                  className="footer-logo"
                />
              </Link>
            </div>
            <div className="footer-info">
              <MdLocationOn className="footer-icon" />
              <p className="footer-txt footer-txt-margin">
                Plot No-220, <br />
                Aji G.I.D.C Phase-II, N-Road,
                <br /> Rajkot-36002 (Gujarat) INDIA
              </p>
            </div>
            <div className="footer-info ">
              <FaMobileAlt className="footer-icon" />
              <a href="tel:+91 76210 02030" className="footer-txt">
                +91 76210 02030
              </a>
            </div>
            <div className="footer-info">
              <MdOutlineEmail className="footer-icon" />
              <a href="mailto:info@multitonpolypack.com" className="footer-txt">
                info@multitonpolypack.com
              </a>
            </div>
            <div className="footer-info">
              <AiOutlineChrome className="footer-icon" />
              <a
                href="http://www.multitonpolypack.com"
                className="footer-txt"
                target="_blank"
              >
                www.multitonpolypack.com
              </a>
            </div>

            <div className="footer-part-social-icons">
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebookF className="footer-social-icon" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                {" "}
                <FaInstagram className="footer-social-icon" />
              </a>

              <a
                href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                target="_blank"
              >
                <FaTwitter className="footer-social-icon" />
              </a>
            </div>
          </div>
          <div className="footer-second-part">
            <p className="footer-link-heading">Quick Links</p>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/Products" className="footer-link">
                  Products
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/ourstrength" className="footer-link">
                  Our Strength
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/About" className="footer-link">
                  About Us
                </Link>
              </li>

              <li>
                {" "}
                <Link to="/contactus" className="footer-link">
                  Contact Us
                </Link>
              </li>
              {/* <li>
                {" "}
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="footer-third-part">
            {/* <iframe
              className="footer-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.803657512359!2d70.7722004!3d22.2854262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca31a6d04edd%3A0x2e3b420a729f2218!2sNakshatra%20-2%2C%20KKV%20Chowk%2C%20150%20Feet%20Ring%20Rd%2C%20New%20College%20Wadi%2C%20Mahavir%20Park%2C%20Rajkot%2C%20Gujarat%20360005!5e0!3m2!1sen!2sin!4v1671788699919!5m2!1sen!2sin"
              width="500"
              height="400"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.0788243535358!2d70.8229207154151!3d22.275003749440597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b591cc4a8ee5%3A0x1aaeb824c885ecf4!2sMultitone%20Polypack%20Pvt.Ltd.!5e0!3m2!1sen!2sin!4v1674797728472!5m2!1sen!2sin"
              width="500"
              height="400"
              className="footer-map"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
