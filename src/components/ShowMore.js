import React, { Component } from 'react'
import { Link } from 'gatsby';

import PlusImg from '../img/plus.svg'

const ShowMore = class extends Component {
  render() {
    return (
      <div className="gc-ended-content" style={{marginTop: "1rem"}} >
        <Link to={this.props.link}>
          <span className="gc-pink-text gc-thin-text" style={{marginRight: "1rem"}}>{this.props.label}</span>
          <img src={PlusImg} alt="+" style={{ width: "2rem", height: "2rem", verticalAlign: "middle" }}/>
        </Link>
      </div>
    )
  }
}

export default ShowMore
