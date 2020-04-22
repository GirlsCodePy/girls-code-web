import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ShowMore from './ShowMore'

const WhoWeAre = class extends Component {
  render() {
    return (
      <div className="flex">
        <img src={this.props.image} style={{ width: "45%" }} />
        <div className="container gc-ended-content" style={{ paddingTop: "2em" }}>
          <span className="principal-title">{this.props.title}</span>
          <p className="title-content">{this.props.description}</p>
          <ShowMore 
            link={this.props.link}
            label={this.props.label}
          />
        </div>
      </div>
    )
  }
}


WhoWeAre.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  label: PropTypes.string
}

export default WhoWeAre