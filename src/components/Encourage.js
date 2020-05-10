import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next';
import { Link } from 'gatsby'


const Encourage = class extends Component {

  isInternal(toLocation) {
    return window.location.host === toLocation.host;
  }


  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <div
          className="section margin-top-0 gc-centered-content"
        >
          <img
            src={this.props.image}
            alt="img"
            style={{ width: "5em", height: "5em" }}
          />
          <h1 className="gc-subtitle">
            {t(this.props.title)}
          </h1>
          <p className="gc-pink-text">{t(this.props.subtitle)}</p>
          <div style={{
            width: "20%",
            display: "inline-block" }}>
              <GCLink link={this.props.buttonLink}>
                <button 
                    className="gc-button is-dark-purple">
                  {t(this.props.buttonLabel)}
                </button>
              </GCLink>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const GCLink = class extends Component {
  parseLink(to) {
    if (typeof window !== 'undefined') {
      let parser = document.createElement('a');
      parser.href = to;
      return parser;
    }
  }
  isInternal(toLocation) {
    if (typeof window !== 'undefined') {
      return window.location.host === toLocation.host;
    }
  }

  render() {
    const {link, children, ...rest} = this.props;
    const toLocation = this.parseLink(link);
    const isInternal = this.isInternal(toLocation);
    if (isInternal) {
      return (<Link to={toLocation.pathname} {...rest}>{children}</Link>);
    } else {
      return (<a href={link} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>);
    }
  }
}



Encourage.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonLink: PropTypes.string
}

export default withTranslation()(Encourage)
