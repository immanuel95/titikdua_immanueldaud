import React from "react";
import drink from "../assets/images/drink.png";
import rightArrow from "../assets/icon/ic_arrow_right_dark.png";

const PrivateEvents = () => {
  return (
    <section className="pirvate-events-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-12 ">
            <img alt="about" src={drink} className="stay-image fade-in" />
          </div>
          <div className="col-lg-6 col-sm-12 d-flex justify-content-center flex-column">
            <p className="title">private events</p>
            <p className="text-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="dark-button">Book Now</button>
            <p className="view-details mt-40">
              <span>VIEW OUR VENUES</span>
              <span>
                <img alt="concept" src={rightArrow} className="right-arrow" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateEvents;
