import React from "react";
import { Link } from "gatsby";
import "../components/SplitBanner/styles.sass";
import GirlsCodeLogoPurple from "../components/GirlsCodeLogoPurple";

const NAV_ELEMENTS_HEIGHT = 50;
const VERTICAL_OFFSET = 63;

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <div className="split-navbar-container">
        <div style={{
              display: 'flex', 
              alignItems: 'center'
            }}
          > 
          <GirlsCodeLogoPurple />
        </div>

        <div className="navbar-brand">
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexGrow: 2,
            justifyContent: "flex-end"

          }}
        >
          <Link className="navbar-item" to="/team">
            Nosotras
          </Link>
          <Link className="navbar-item" to="/activities">
            Actividades
          </Link>
          <Link className="navbar-item" to="/blog">
            Tienda
          </Link>
          <Link className="navbar-item" to="/contact">
            Contacto
          </Link>
        </div>
      </div>
    );
  }
};

export default Navbar;
