import React from "react";
import wedding from "../assets/images/img_wedding.jpg";
import rightArrow from "../assets/icon/ic_arrow_right_dark.png";
import leftArrow from "../assets/icon/ic_arrow_left_dark.png";

const Weddings = () => {
  const Item = () => (
    <>
      <div className="flex-fill d-flex justify-content-end margin-vertical">
        <div className="wedding-wrapper d-flex justify-content-center flex-column">
          <p className="title">weddings</p>
          <p className="text-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="view-details">
            <span>VIEW DETAILS</span>
            <span>
              <img alt="concept" src={rightArrow} className="right-arrow" />
            </span>
          </p>
        </div>
      </div>
      <section
        className="events"
        style={{ backgroundImage: `url(${wedding})` }}
      ></section>
    </>
  );

  return (
    <section
      id="weddingCarousel"
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
        href="#weddingCarousel"
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
        href="#weddingCarousel"
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

export default Weddings;
