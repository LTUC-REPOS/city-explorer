import React, { Component } from "react";

class ErrorWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div style={{ marginTop: 100 }}>
          <h1>{this.props.error}</h1>
        </div>
      </>
    );
  }
}

export default ErrorWeather;
