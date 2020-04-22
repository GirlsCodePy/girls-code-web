import React, { Component } from 'react'


const DonateButton = class extends Component {
  render() {
    return (
      <React.Fragment>
        <button 
            className="gc-purple-button"
            onClick={()=> window.open("https://www.patreon.com/", "_blank")}>
          {this.props.label}
        </button>
      </React.Fragment>
    )
  }
}

export default DonateButton