import React from "react";
import CustomNavbar from "../CustomNavbar";
import './styles.sass'
import ToolsLogo from "../ToolsLogo";
import { withTranslation } from "react-i18next"

export const SplitBanner = ({t}) => (
  <div>
   <CustomNavbar color="#ffffff" className="main-navbar"/>  
  <div className="split-main-container">
    <div className="split-section-left">
      <div className="split-left-content">
        <h1 className="split-label-white">{t("homePhraseWhite")}</h1>
        <h1 className="split-label-accent">{t("homePhraseAccent")}</h1>
      </div>
      <div className="split-left-triangle" />
    </div>
    <div className="split-section-right is-hidden-touch">
      <div className="split-right-img-container ">
        <ToolsLogo />
      </div>
    </div>
  </div>
  </div>
);

export default withTranslation()(SplitBanner);

