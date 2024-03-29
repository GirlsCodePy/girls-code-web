import React, { Component } from 'react';

const DonateButton = class extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          className="gc-button is-dark-purple"
          onClick={() =>
            window.open('https://www.metrepay.com/girlscode', '_blank')
          }
        >
          {this.props.label}
        </button>
      </React.Fragment>
    );
  }
};

export default DonateButton;
