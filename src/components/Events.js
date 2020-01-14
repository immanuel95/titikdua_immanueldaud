import React from "react";
import rightArrow from "../assets/icon/ic_arrow_right_dark.png";
import leftArrow from "../assets/icon/ic_arrow_left_dark.png";
import chef from "../assets/images/chef-1.png";

const Events = () => {
  const Item = () => (
    <>
      <div className="flex-fill d-flex justify-content-end margin-vertical">
        <div className="event-wrapper d-flex justify-content-center flex-column">
          <p className="title">upcoming events</p>
          <p className="text-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="view-details">
            <span>VIEW ALL EVENTS</span>
            <span>
              <img alt="concept" src={rightArrow} className="right-arrow" />
            </span>
          </p>
        </div>
      </div>
      <section className="events" style={{ backgroundImage: `url(${chef})` }}>
        <div className="container-fluid">
          <div className="row fill">
            <div className="col-lg-6 col-md-12 col-sm-12 events-content">
              <p className="text-content-light">ACTIVITY</p>
              <p className="title-light">
                the art of asian cuisine: indonesia tradition
              </p>
              <p className="text-content-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="light-button">JOIN THE EVENT</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <section
      id="eventsCarousel"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Item />
        </div>
        <div className="carousel-item">
          <Item />
        </div>
      </div>
      <a
        className="control-prev"
        href="#eventsCarousel"
        role="button"
        data-slide="prev"
      >
        <div className="prev-arrow-wrapper">
          <img
            alt="activity-arrow-left"
            src={leftArrow}
            className="events-arrow"
          />
        </div>
      </a>
      <a
        className="control-next"
        href="#eventsCarousel"
        role="button"
        data-slide="next"
      >
        <div className="next-arrow-wrapper">
          <img
            alt="activity-arrow-left"
            src={rightArrow}
            className="events-arrow"
          />
        </div>
      </a>
    </section>
  );
};

export default Events;
