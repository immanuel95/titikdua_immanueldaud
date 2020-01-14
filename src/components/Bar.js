import React from "react";
import cocktail from "../assets/images/img_cocktail.png";
import coffee from "../assets/images/img_coffee.png";

const Bar = () => {
  return (
    <section className="barcoffee">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 d-flex flex-column align-items-center justify-content-center">
            <span>
              <img
                alt="cocktail"
                src={cocktail}
                className="cocktail-image fade-in"
              />
            </span>
            <span>
              <img
                alt="cocktail"
                src={coffee}
                className="coffee-image fade-in"
              />
            </span>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 barcoffee-content-wrapper">
            <p className="title-light">bar + coffee</p>
            <p className="text-content-light barcoffee-content-width">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
            <button className="light-button">LEARN MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bar;
