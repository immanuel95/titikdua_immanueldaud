import React from "react";

import menu from "../assets/icon/ic_menu_white.png";
import logo from "../assets/logo/logo_titikdua_light.png";
import downArrow from "../assets/icon/ic_arrow_down_light.png";

const Header = ({ scrollToRef }) => {
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
        <div className="scroll" onClick={scrollToRef}>
          <p className="scroll-text">scroll</p>
          <img alt="down-arrow" src={downArrow} className="down-arrow" />
        </div>
      </section>
    </>
  );
};

export default Header;
