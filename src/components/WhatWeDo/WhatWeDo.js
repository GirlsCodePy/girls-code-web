import React from "react";
import "./styles.sass";
import cursos from "../../img/cursos.svg";
import talleres from "../../img/talleres.svg";
import mentorias from "../../img/mentorias.svg";
import { withTranslation } from "react-i18next"

export const WhatWeDo = ({t}) => (
  <div className="column-container">
    <div className="has-text-centered">
      <h1 className="principal-title separation">{t("whatWeDo")}</h1>
    </div>
    <div className="columns columns-centered">
      <div className="column">
        <div className="box flex-box">
          <img
            src={talleres}
            alt="cursos"
            className="img-size"
          />
          <div className="box-text">{t("workshops")}</div>
        </div>
      </div>
      <div className="column">
        <div className="box flex-box">
          <img
            src={cursos}
            alt="cursos"
            className="img-size"
          />
          <div className="box-text">{t("courses")}</div>
        </div>
      </div>
      <div className="column">
        <div className="box flex-box">
          <img
            src={mentorias}
            alt="cursos"
            className="img-size"
          />
          <div className="box-text">{t("mentorship")}</div>
        </div>
      </div>
    </div>
  </div>
);

export default withTranslation()(WhatWeDo);
