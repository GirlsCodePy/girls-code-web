import React from "react";

import GirlsCodeLogo from "../GirlsCodeLogo";
import Navbar from "../Navbar";
import './styles.sass'
import ToolsLogo from "../ToolsLogo";

const VERTICAL_OFFSET = 63;
const NAV_ELEMENTS_HEIGHT = 50;

export const SplitBanner = () => (
  <div>
     {/*  <Navbar/>  */}  
  <div className="split-main-container">
    <div className="split-section-left">
      <div className="split-left-content">
        <h1 className="split-label-white">Nosotras creemos</h1>
        <h1 className="split-label-accent">Ellas crean</h1>
      </div>
      <div className="split-left-triangle" />
    </div>
    <div className="split-section-right">
      
      <div className="split-right-img-container">
      <ToolsLogo />
      </div>
    </div>
  </div>
  </div>
);

export default SplitBanner;
