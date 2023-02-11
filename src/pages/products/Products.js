import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import "./Products.css";
const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ourproduct-sec">
      <div className="ourproduct-con">
        <p className="h2 product-head-clr-chng">Our Products</p>
        <div class="trustee-page-card-container">
          <div class="trustee-page-card-table">
            <div className="card-btn-flex">
              <Link to="/products">
                <div class="trustee-pg-card">
                  <div class="facee frontt">
                    <img src={images.product_1} alt="Product Image" />
                    <h5>Pillow Pouch</h5>
                  </div>
                  <div class="facee backk">
                    <h5 className="ourpoduct-card-head">Details</h5>
                    {/* <p style={{ marginBottom: "20px" }}></p> */}
                    <div class="box">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                      {/* <a
                        style={{
                          color: "#333",
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                        href="about-tm.html"
                      >
                        Read More
                      </a> */}
                    </div>
                  </div>
                </div>
              </Link>
              {/* <Link to="/contactus" className="btn-dark">
                Inquiry Now
              </Link> */}
            </div>
            <div className="card-btn-flex">
              <Link to="/products">
                <div className="trustee-pg-card">
                  <div className="facee frontt">
                    <img src={images.product_2} alt="Product Image" />
                    <h5>Stand-Up Pouch</h5>
                  </div>
                  <div className="facee backk">
                    <h5 className="ourpoduct-card-head">Details</h5>

                    <div class="box">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                      {/* <a
                        style={{
                          color: "#333",
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                        href="about-tm.html"
                      >
                        Read More
                      </a> */}
                    </div>
                  </div>
                </div>
              </Link>
              {/* <Link to="/contactus" className="btn-dark">
                Inquiry Now
              </Link> */}
            </div>
            <div className="card-btn-flex">
              <Link to="/products">
                <div class="trustee-pg-card">
                  <div class="facee frontt">
                    <img src={images.product_4_sideguess} alt="Product Image" />
                    <h5>Side Gusset Pouch</h5>
                  </div>
                  <div class="facee backk">
                    <h5 className="ourpoduct-card-head">Details</h5>

                    <div class="box">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                      {/* <a
                        style={{
                          color: "#333",
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                        href="about-tm.html"
                      >
                        Read More
                      </a> */}
                    </div>
                  </div>
                </div>
              </Link>
              {/* <Link to="/contactus" className="btn-dark">
                Inquiry Now
              </Link> */}
            </div>

            <div className="card-btn-flex">
              <Link to="/products">
                <div class="trustee-pg-card">
                  <div class="facee frontt">
                    <img src={images.product_2} alt="Product Image" />
                    <h5>3 Side Seal Pouch</h5>
                  </div>
                  <div class="facee backk">
                    <h5 className="ourpoduct-card-head">Details</h5>

                    <div class="box">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                      {/* <br />
                      <a
                        style={{
                          color: "#333",
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                        href="about-tm.html"
                      >
                        Read More
                      </a> */}
                    </div>
                  </div>
                </div>
              </Link>
              {/* <Link to="/contactus" className="btn-dark">
                Inquiry Now
              </Link> */}
            </div>

            <div className="card-btn-flex">
              <Link to="/products">
                <div class="trustee-pg-card">
                  <div class="facee frontt">
                    <img src={images.product_5} alt="Product Image" />
                    <h5>Zipper Lock Pouch</h5>
                  </div>
                  <div class="facee backk">
                    <h5 className="ourpoduct-card-head">Details</h5>
                    {/* <p style={{ marginBottom: "20px" }}></p> */}
                    <div class="box">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                      {/* <a
                        style={{
                          color: "#333",
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                        href="about-tm.html"
                      >
                        Read More
                      </a> */}
                    </div>
                  </div>
                </div>
              </Link>
              {/* <Link to="/contactus" className="btn-dark">
                Inquiry Now
              </Link> */}
            </div>

            <div className="card-btn-flex">
              <Link to="/products">
                <div class="trustee-pg-card">
                  <div class="facee frontt">
                    <img src={images.product_6} alt="Product Image" />
                    <h5>Aluminium Foil ROll & Pouch </h5>
                  </div>
                  <div class="facee backk">
                    <h5 className="ourpoduct-card-head">Details</h5>
                    {/* <p style={{ marginBottom: "20px" }}></p> */}
                    <div class="box">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                      {/* <a
                        style={{
                          color: "#333",
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                        href="about-tm.html"
                      >
                        Read More
                      </a> */}
                    </div>
                  </div>
                </div>
              </Link>
              {/* <Link to="/contactus" className="btn-dark">
                Inquiry Now
              </Link> */}
            </div>

            <div className="card-btn-flex">
              <Link to="/products">
                <div class="trustee-pg-card">
                  <div class="facee frontt">
                    <img src={images.product_7} alt="Product Image" />
                    <h5>Quad Seal Pouch</h5>
                  </div>
                  <div class="facee backk">
                    <h5 className="ourpoduct-card-head">Details</h5>
                    {/* <p style={{ marginBottom: "20px" }}></p> */}
                    <div class="box">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                      {/* <a
                        style={{
                          color: "#333",
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                        href="about-tm.html"
                      >
                        Read More
                      </a> */}
                    </div>
                  </div>
                </div>
              </Link>
              {/* <Link to="/contactus" className="btn-dark">
                Inquiry Now
              </Link> */}
            </div>

            <div className="card-btn-flex">
              <Link to="/products">
                <div class="trustee-pg-card">
                  <div class="facee frontt">
                    <img src={images.product_8} alt="Product Image" />
                    <h5>Stand-Up Zipper Lock Pouch</h5>
                  </div>
                  <div class="facee backk">
                    <h5 className="ourpoduct-card-head">Details</h5>
                    {/* <p style={{ marginBottom: "20px" }}></p> */}
                    <div class="box">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                      {/* <a
                        style={{
                          color: "#333",
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                        href="about-tm.html"
                      >
                        Read More
                      </a> */}
                    </div>
                  </div>
                </div>
              </Link>
              {/* <Link to="/contactus" className="btn-dark">
                Inquiry Now
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
