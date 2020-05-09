import React from "react"
import PropTypes from "prop-types"

import "./styles.sass"

const TeamMember = ({ name, position, imageSrc }) => (
  <div className="team-container">
    <div className="team-circle-container">
      <img className="team-image" src={imageSrc} alt={`${name}`} />
    </div>
    <div className="separator" />
    <h3 className="gc-subtitle-small">{name}</h3>
    <span className="gc-invert-text">{position}</span>
  </div>
)

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string
}

export default TeamMember
