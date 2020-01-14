import React from "react";
import facebook from "../assets/icon/ic_fb_light.png";
import instagram from "../assets/icon/ic_ig_light.png";

const Footer = () => {
  return (
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
  );
};

export default Footer;
