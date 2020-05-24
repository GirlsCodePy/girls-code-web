import React from "react";
import "./styles.sass";
import cursos from "../../img/cursos.svg";
import talleres from "../../img/talleres.svg";
import mentorias from "../../img/mentorias.svg";
import { withTranslation } from "react-i18next"

export const WhatWeDo = ({t}) => (
  <div className="column-container">
    <div class="has-text-centered">
      <h1 className="principal-title separation">{t("whatWeDo")}</h1>
    </div>
    <div class="columns columns-centered">
      <div class="column">
        <div class="box flex-box">
          <img
            src={talleres}
            alt="cursos"
            class="img-size"
          />
          <div class="box-text">{t("workshops")}</div>
        </div>
      </div>
      <div class="column">
        <div class="box flex-box">
          <img
            src={cursos}
            alt="cursos"
            class="img-size"
          />
          <div class="box-text">{t("courses")}</div>
        </div>
      </div>
      <div class="column">
        <div class="box flex-box">
          <img
            src={mentorias}
            alt="cursos"
            class="img-size"
          />
          <div class="box-text">{t("mentorship")}</div>
        </div>
      </div>
    </div>
  </div>
);

export default withTranslation()(WhatWeDo);
