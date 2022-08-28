import React, { Component } from "react";

class Error extends Component {
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

export default Error;
