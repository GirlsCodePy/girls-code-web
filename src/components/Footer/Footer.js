import React, { Component } from "react"
import { Link } from "gatsby"
import "./style.sass"

import logo from "../../img/logo-white.svg"
import facebook from "../../img/social/facebook.svg"
import instagram from "../../img/social/instagram.svg"
import twitter from "../../img/social/twitter.svg"
import linkedIn from "../../img/social/linkedIn.svg"
import youtube from "../../img/social/youtube.svg"

import { withTranslation } from "react-i18next"
import LanguageSwitcher from "../LanguageSwitcher"
import Container from "../Container"

import SubscribeForm from "../SubscribeForm"

const Footer = class extends Component {
  render() {
    const { t } = this.props

    return (
      <footer className="footer has-background-purple has-text-white-ter">
        <Container>
          <div className="footer-content columns">
            <div className="column is-one-quarter">
              <section className="footer-menu">
                <div className="footer-title">{t("learnMore")}</div>
                <ul className="footer-menu-list">
                  <li>
                    <Link to="/" className="footer-item">
                      {t("home")}
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-item" to="/about">
                      {t("about")}
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-item" to="/team">
                      {t("team")}
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-item" to="/activities">
                      {t("activities")}
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-item" to="/activities/resources">
                      {t("resources")}
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-item" to="/store">
                      {t("store")}
                    </Link>
                  </li>
                  <li>
                    <Link className="footer-item" to="/store/donate">
                      {t("donate")}
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-one-quarter">
              <section className="footer-menu">
                <div className="footer-title">{t("contact")}</div>
                <ul className="footer-menu-list">
                  <li>
                    <p className="footer-item">+595 981 931 249</p>
                  </li>
                  <li>
                    <p className="footer-item">+595 981 631 303</p>
                  </li>
                  <li>
                    <p className="footer-item">contacto@girlscode.com.py</p>
                  </li>
                  <li>
                    <div className="social footer-item">
                      <a
                        title="Twitter"
                        href="https://twitter.com/pygirlscode"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={twitter} alt="Twitter" />
                      </a>
                      <a
                        title="Facebook"
                        href="https://www.facebook.com/girlscodepy/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={facebook} alt="Facebook" />
                      </a>
                      <a
                        title="Instagram"
                        href="https://www.instagram.com/girlscodepy/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={instagram} alt="Instagram" />
                      </a>
                      <a
                        title="LinkedIn"
                        href="https://www.linkedin.com/company/girls-code/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={linkedIn} alt="LinkedIn" />
                      </a>
                      <a
                        title="Youtube"
                        href="https://www.youtube.com/channel/UCP6E5xXwLJ6OWtM4E1DSQvw"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={youtube} alt="youtube" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <LanguageSwitcher />
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-5 is-offset-1">
              <div className="footer-title">{t("subscribeEmails")}</div>
              <SubscribeForm />
            </div>
          </div>
          <div className="content has-text-right copyright">
            <p className="text">© 2020 #GirlsCode All rights reserved</p>
            <img
              src={logo}
              alt="girlscode"
              style={{ width: "147px", height: "19px" }}
            />
            <p className="symbol">©</p>
          </div>
        </Container>
      </footer>
    )
  }
}

export default withTranslation()(Footer)
