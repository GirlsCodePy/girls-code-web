import React from "react";
import PropTypes from "prop-types";

import ToolsLogo from "../ToolsLogo";
import GirlsCodeLogo from "../GirlsCodeLogo";

import './styles.sass'

const VERTICAL_OFFSET = 63;
const NAV_ELEMENTS_HEIGHT = 50;

export const SplitBanner = ({}) => (
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
        <h1 className="split-label-accent">Ellas hacen</h1>
      </div>
      <div className="split-left-triangle" />
    </div>
    <div className="split-section-right">
      <div
        style={{
          position: "absolute",
          top: `${NAV_ELEMENTS_HEIGHT}px`,
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <h3
          style={{
            marginRight: "60px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
          }}
        >
          Sobre
        </h3>
        <h3
          style={{
            marginRight: "60px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
          }}
        >
          Programas
        </h3>
        <h3
          style={{
            marginRight: "60px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
          }}
        >
          Tienda
        </h3>
        <h3
          style={{
            marginRight: "60px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
          }}
        >
          Contacto
        </h3>
      </div>
      <div className="split-right-img-container">
        <ToolsLogo />
      </div>
    </div>
  </div>
);

export default SplitBanner;
