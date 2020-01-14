import React from "react";
import rightArrow from "../assets/icon/ic_arrow_right_dark.png";
import cycling from "../assets/images/img_cycling.jpg";
import yoga from "../assets/images/img_yoga.jpg";
import hiking from "../assets/images/img_hiking.jpg";

const Activities = () => {
  return (
    <section className="activities">
      <div className="container-fluid">
        <div className="title">activities</div>
        <div className="text-content subtitle-wrapper">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="row flex-row flex-nowrap">
          <div className="col-lg-4 col-md-6 col-sm-6 d-flex align-items-end">
            <div className="activity-details-wrapper">
              <p className="activity-name ">cycling</p>
              <p className="activity-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
              <p className="view-details">
                <span>VIEW DETAILS</span>
                <span>
                  <img alt="concept" src={rightArrow} className="right-arrow" />
                </span>
              </p>
            </div>
            <img
              alt="cycling"
              src={cycling}
              className="activities-image fade-in"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 d-flex align-items-end ml-n3">
            <div className="activity-details-wrapper">
              <p className="activity-name ">yoga class</p>
              <p className="activity-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
              <p className="view-details">
                <span>VIEW DETAILS</span>
                <span>
                  <img alt="concept" src={rightArrow} className="right-arrow" />
                </span>
              </p>
            </div>
            <img
              alt="cycling"
              src={yoga}
              className="activities-image fade-in"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 d-flex align-items-end ml-n3">
            <div className="activity-details-wrapper">
              <p className="activity-name ">hiking</p>
              <p className="activity-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
              <p className="view-details">
                <span>VIEW DETAILS</span>
                <span>
                  <img alt="concept" src={rightArrow} className="right-arrow" />
                </span>
              </p>
            </div>
            <img
              alt="cycling"
              src={hiking}
              className="activities-image fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
