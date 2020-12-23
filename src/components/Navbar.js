import React from 'react'
import { Link } from 'gatsby'
import ToolsLogo from "../components/ToolsLogo";
import '../components/SplitBanner/styles.sass'

const NAV_ELEMENTS_HEIGHT = 50;

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
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
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (

      
      <div
        className="is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
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
         
            <div style={{
                position: "absolute",
                top: `${NAV_ELEMENTS_HEIGHT}px`,
                width: "100%",
                display: "flex",
                flexDirection: "row",
              }}>
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
            <div className="split-right-img-container">
            <ToolsLogo />
            </div>
       
      </div>
    )
  }
}

export default Navbar
