import React from "react";
import images from "../../constants/images";
import "./Pouchwemake.css";
const Pouchwemake = () => {
  return (
    <>
      <div className="pouchwemake-sec">
        <div className="pouchwemake-head">
          <h3 className="h2 head-clr">
            <span className="h2 heading-clr-change heading-border">
              Types Of
            </span>{" "}
            Pouch We Make
          </h3>
        </div>
        <div className="container-part pouchwemake-lists-flex">
          <ul className="pouchwemake-lists">
            <li className="pouchwemake-list">PILLOW POUCH</li>
            <li className="pouchwemake-list">STAND-UP POUCH</li>
            <li className="pouchwemake-list">SIDE GUSSET POUCH</li>
          </ul>

          <ul className="pouchwemake-lists">
            <li className="pouchwemake-list">3 SIDE SEAL POUCH</li>
            <li className="pouchwemake-list">ZIPPER LOCK POUCH</li>
            <li className="pouchwemake-list">ALUMINIUM FOIL ROLL & POUCH</li>
          </ul>

          <ul className="pouchwemake-lists">
            <li className="pouchwemake-list">QUED SEAL POUCH</li>
            <li className="pouchwemake-list">STAND-UP ZIPPER LOCK POUCH</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Pouchwemake;
