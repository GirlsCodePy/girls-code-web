import React, { Component } from 'react'

import { withTranslation } from 'react-i18next';
 
import FlowerLogo from '../img/flower.svg';
import DonateButton from './DonateButton';


const Donate = class extends Component {
  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <div
          className="section margin-top-0 gc-centered-content"
        >
          <img
            src={FlowerLogo}
            alt="Flower"
            style={{ width: "5em", height: "5em" }}
          />
          <h1 className="gc-subtitle">
            {t("bePart")}
          </h1>
          <p className="gc-pink-text">{t("sendMessage")}</p>
          <div style={{
            width: "20%",
            display: "inline-block" }}>
              <DonateButton label={t("donateUs")}/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withTranslation()(Donate)
