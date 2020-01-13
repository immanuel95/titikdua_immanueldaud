import React, { useRef } from "react";

import logo from "./assets/logo/logo_titikdua_light.png";
import aboutImage from "./assets/images/img_about_masked.jpg";
import stay from "./assets/images/stay.png";
import cycling from "./assets/images/img_cycling.jpg";
import yoga from "./assets/images/img_yoga.jpg";
import hiking from "./assets/images/img_hiking.jpg";
import cocktail from "./assets/images/img_cocktail.png";
import coffee from "./assets/images/img_coffee.png";
import kitchen from "./assets/images/img_kitchen_masked.jpg";
import wedding from "./assets/images/img_wedding.jpg";
import chef from "./assets/images/chef-1.png";
import drink from "./assets/images/drink.png";

import menu from "./assets/icon/ic_menu_white.png";
import downArrow from "./assets/icon/ic_arrow_down_light.png";
import rightArrow from "./assets/icon/ic_arrow_right_dark.png";
import leftArrow from "./assets/icon/ic_arrow_left_dark.png";
import facebook from "./assets/icon/ic_fb_light.png";
import instagram from "./assets/icon/ic_ig_light.png";

const scrollToRef = ref =>
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: "smooth"
  });

const App = () => {
  const myRef = useRef(null);

  return (
    <>
      <nav className="nav">
        <img alt="menu" src={menu} className="menu" />
      </nav>
      {/* ===== header ====== */}
      <section className="header fade-in">
        <div className="logo-wrapper">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="scroll" onClick={() => scrollToRef(myRef)}>
          <p className="scroll-text">scroll</p>
          <img alt="down-arrow" src={downArrow} className="down-arrow" />
        </div>
      </section>
      {/* =================== */}

      {/* ===== about ====== */}
      <section className="pattern-1-wrapper" ref={myRef}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-sm-12 pattern1-content-order d-flex justify-content-center flex-column">
              <p className="title">about titikdua</p>
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
            <div className="col-lg-6 col-sm-12 pattern1-image-order">
              <img
                alt="about"
                src={aboutImage}
                className="pattern-1-image fade-in"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ================== */}

      {/* ===== activity ====== */}
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
      <section
        className="pattern-2"
        style={{ backgroundImage: `url(${chef})` }}
      >
        <div className="container-fluid">
          <div className="row fill">
            <div className="col-lg-6 col-md-12 col-sm-12 pattern-2-content">
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
            <div className="col-lg-6 col-md-12 arrow-wrapper d-flex flex-column justify-content-end align-items-end">
              <div className="pattern2-arrow-background">
                <img
                  alt="activity-arrow-left"
                  src={leftArrow}
                  className="pattern-2-arrow"
                />
              </div>
              <div className="pattern2-arrow-background">
                <img
                  alt="activity-arrow-left"
                  src={rightArrow}
                  className="pattern-2-arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===================== */}

      {/* ===== stay in the moment ====== */}
      <section className="pattern-1-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-sm-12 pattern1-content-order d-flex justify-content-center flex-column">
              <p className="title">stay in the moment</p>
              <p className="text-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="dark-button">Book Now</button>
              <p className="view-details mt-40">
                <span>ROOM & FACILITIES DETAIL</span>
                <span>
                  <img alt="concept" src={rightArrow} className="right-arrow" />
                </span>
              </p>
            </div>
            <div className="col-lg-6 col-sm-12 pattern1-image-order">
              <img alt="about" src={stay} className="stay-image fade-in" />
            </div>
          </div>
        </div>
      </section>
      {/* =============================== */}

      {/* ===== activities ====== */}
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
                    <img
                      alt="concept"
                      src={rightArrow}
                      className="right-arrow"
                    />
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
                    <img
                      alt="concept"
                      src={rightArrow}
                      className="right-arrow"
                    />
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
                    <img
                      alt="concept"
                      src={rightArrow}
                      className="right-arrow"
                    />
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
      {/* ======================= */}

      {/* ===== bar & coffee ====== */}
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
      {/* ========================= */}

      {/* ===== kitchen ====== */}
      <section className="pattern-1-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-sm-12 pattern1-content-order d-flex justify-content-center flex-column">
              <p className="title">kitchen</p>
              <p className="text-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="dark-button">Book Now</button>
            </div>
            <div className="col-lg-6 col-sm-12 pattern1-image-order">
              <img
                alt="about"
                src={kitchen}
                className="pattern-1-image fade-in"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ==================== */}

      {/* ===== weddings ====== */}
      <div className="flex-fill d-flex justify-content-end margin-vertical">
        <div className="event-wrapper d-flex justify-content-center flex-column">
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
        className="pattern-2"
        style={{ backgroundImage: `url(${wedding})` }}
      >
        <div className="container-fluid">
          <div className="row fill">
            <div className="col-lg-6 col-md-12 col-sm-12 pattern-2-content">
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
            <div className="col-lg-6 col-md-12 arrow-wrapper d-flex flex-column justify-content-end align-items-end">
              <div className="pattern2-arrow-background">
                <img
                  alt="activity-arrow-left"
                  src={leftArrow}
                  className="pattern-2-arrow"
                />
              </div>
              <div className="pattern2-arrow-background">
                <img
                  alt="activity-arrow-left"
                  src={rightArrow}
                  className="pattern-2-arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===================== */}

      {/* ===== private events ====== */}
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
      {/* =========================== */}

      {/* ===== footer ====== */}
      <footer className="footer">
        <p className="text-content-light social-media">
          Copyright © -- Privacy Policy
        </p>
        <div className="social-media">
          <span>
            <img alt="facebook" src={facebook} className="social-media-icon" />
          </span>
          <span>
            <p className="text-content-light social-media-text">titikdua.id</p>
          </span>
          <span>
            <img alt="facebook" src={instagram} className="social-media-icon" />
          </span>
          <span>
            <p className="text-content-light social-media-text">@titikdua.id</p>
          </span>
        </div>
      </footer>
      {/* =================== */}
    </>
  );
};

export default App;
