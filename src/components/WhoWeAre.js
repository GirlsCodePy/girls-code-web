import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ShowMore from './ShowMore'

const WhoWeAre = class extends Component {
  render() {
    return (
      <div className="flex" style={{marginRight: "11.5rem", marginTop: "9rem"}}>
        {/* Esto no es lo mas apropiado pero no me funcionaba la carga de imagen, alternativa temporal. */}
        <img src={"/img/"+this.props.image+".svg"} alt="img" style={{ width: "65%" }} />
        <div className="container gc-ended-content" style={{ marginTop: "5em" }}>
          <span className="principal-title">{this.props.title}</span>
          <p className="title-content" style={{marginTop:"2rem"}}>{this.props.description}</p>
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
