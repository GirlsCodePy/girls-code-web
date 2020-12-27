import React from "react";

import GirlsCodeLogo from "../GirlsCodeLogo";
import Navbar from "../Navbar";
import './styles.sass'

const VERTICAL_OFFSET = 63;
const NAV_ELEMENTS_HEIGHT = 50;

export const SplitBanner = () => (
  <div className="split-main-container">
    <div className="split-section-left">
      <div className="split-left-content">
        <div
          style={{
            position: "absolute",
            top: `${NAV_ELEMENTS_HEIGHT + VERTICAL_OFFSET / 2}px`,
            alignSelf: "flex-start",
          }}
        >
          <GirlsCodeLogo />
        </div>
        <h1 className="split-label-white">Nosotras creemos</h1>
        <h1 className="split-label-accent">Ellas crean</h1>
      </div>
      <div className="split-left-triangle" />
    </div>
    <div className="split-section-right">
      <Navbar/>
    </div>
  </div>
);

export default SplitBanner;
