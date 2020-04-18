import React, { Component } from 'react'

import { withTranslation } from 'react-i18next';
 
import Layout from '../../components/Layout'
import FlowerLogo from '../../img/flower.svg';



const DonatePage  = class extends Component {
  
  render() {

    const { t } = this.props;

    return (
      <Layout>
        <div
          className="section margin-top-0 gc-centered-content"
        >
          <img
            src={FlowerLogo}
            alt="Flower"
            style={{ width: '5em', height: '5em' }}
          />
          <h1 className="gc-subtitle">
            {t("bePart")}
          </h1>
          <p className="gc-pink-text">{t("sendMessage")}</p>
          <div className="gc-purple-button">
            {t("writeUs")}
          </div>
        </div>
      </Layout>
    )
  }
}

export default withTranslation()(DonatePage)
