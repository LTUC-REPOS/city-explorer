import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="headerCSS" style={{ marginTop: 100 }}>
          <h1>All rights reserved for LTUC 2022</h1>
        </div>
      </>
    );
  }
}

export default Footer;
