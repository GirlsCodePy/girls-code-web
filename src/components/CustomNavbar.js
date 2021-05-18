import React from "react";
import clsx from "clsx";
import { Link } from "gatsby";
import { Navbar } from "react-bulma-components";
import "../components/SplitBanner/styles.sass";
import GirlsCodeLogoSVG from "../components/GirlsCodeLogoSVG";
import { withTranslation } from "react-i18next"
import LanguageSwitcher from "./LanguageSwitcher"

const CustomNavbar = ({t, color =  "#CA00CA", className}) => {
  const [isActive, setIsActive] = React.useState(false);
  const [isActiveDropdown, setIsActiveDropdown] = React.useState({
    us: false,
    lang: false
  });

  return (
    <Navbar className={clsx({[className]: className, 'navbar-open': isActive})}>
      <Navbar.Brand>          
        <Link className="navbar-item logo" to="/">
          <GirlsCodeLogoSVG fill={color}/>
        </Link>
        <Navbar.Burger onClick={() => {
            setIsActive(!isActive)
          }} />
      </Navbar.Brand>
      <Navbar.Menu className={clsx('navbar-menu', { 'is-active': isActive})}>
        <Navbar.Container align="right">
           <Navbar.Item href="#" active={isActiveDropdown.us} onClick={() => {
              setIsActiveDropdown(prev => ({...prev, us: !prev.us}))
            }}>
            <Navbar.Link arrowless >
            {t("us")}
            </Navbar.Link>
            <Navbar.Dropdown boxed>
              <Link className="navbar-item" to="/about">
              {t("about")}
              </Link>
              <Link className="navbar-item" to="/team">
              {t("team")}
              </Link>
            </Navbar.Dropdown>
          </Navbar.Item>
          <Link className="navbar-item" to="/activities">
          {t("activities")}
          </Link>
          <Link className="navbar-item" to="/contact">
          {t("contact")}
          </Link>

          <Navbar.Item href="#">
            <LanguageSwitcher abbr customClassName={'navbar-lang'} />
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
  
};

export default withTranslation()(CustomNavbar);