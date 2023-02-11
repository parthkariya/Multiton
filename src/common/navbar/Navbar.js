import React, { useState } from "react";
import images from "../../constants/images";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="nav-sec">
        <div className="nav-main-nav">
          <nav className="nav-con">
            <div className="nav-logobox">
              <img src={images.logo} className="nav-logo" />
            </div>
            <ul className="nav-linkks">
              <li>
                <Link to="/" className="nav-linkk">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="nav-linkk">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/ourstrength" className="nav-linkk">
                  Our Strength
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-linkk">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contactus" className="nav-linkk">
                  Contact Us
                </Link>
              </li>

              {/* <li>
                <Link to="/recipes" className="nav-linkk">
                  Recipes
                </Link>
              </li> */}
              {/* <li>
                <Link to="/services" className="nav-linkk">
                  Services
                </Link>
              </li> */}
            </ul>
            <div className="nav-btn-icon-part">
              {toggleMenu === false ? (
                <button className="nav-btn" onClick={() => setToggleMenu(true)}>
                  <AiOutlineMenu className="nav-btn-icon" />
                </button>
              ) : (
                <button
                  className="nav-btn"
                  onClick={() => setToggleMenu(false)}
                >
                  <AiOutlineClose className="nav-btn-icon" />
                </button>
              )}
            </div>
          </nav>
        </div>
      </div>
      <>
        {toggleMenu && (
          <div className="mobile-nav-main">
            <ul className="mobile-nav-links">
              <li>
                <Link
                  to={"/"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/products"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to={"/Ourstrength"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link"
                >
                  Our Strength
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to={"/contactus"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link"
                >
                  Contact Us
                </Link>
              </li>

              {/* <li>
                <Link
                  to={"/recipes"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link"
                >
                  Recipes
                </Link>
              </li>{" "} */}
              {/* <li>
                <Link
                  to={"/Services"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link"
                >
                  Services
                </Link>
              </li> */}
            </ul>
          </div>
        )}
      </>
    </>
  );
};

export default Navbar;
