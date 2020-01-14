import React from "react";
import kitchen from "../assets/images/img_kitchen_masked.jpg";

const Kitchen = () => {
  return (
    <section className="about-wrapper">
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
          </div>
          <div className="col-lg-6 col-sm-12 about-image-order">
            <img alt="about" src={kitchen} className="about-image fade-in" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kitchen;
