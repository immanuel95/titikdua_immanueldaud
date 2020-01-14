import React from "react";

import rightArrow from "../assets/icon/ic_arrow_right_dark.png";
import aboutImage from "../assets/images/img_about_masked.jpg";

const About = ({ myRef }) => {
  return (
    <section className="about-wrapper" ref={myRef}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-12 about-content-order d-flex justify-content-center flex-column">
            <p className="title">kitchen</p>
            <p className="text-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="dark-button">Book Now</button>
            <p className="view-details mt-40">
              <span>OUR CONCEPT</span>
              <span>
                <img alt="concept" src={rightArrow} className="right-arrow" />
              </span>
            </p>
          </div>
          <div className="col-lg-6 col-sm-12 about-image-order">
            <img alt="about" src={aboutImage} className="about-image fade-in" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
