import React, { Component } from "react";

class DataCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div style={{ textAlign: "center", padding: 50 }}>
          <div
            style={{
              width: "60%",
              textAlign: "left",
            }}
          >
            <h1>Data for {this.props.data.location} </h1>
            <div>
              <h3>Address : {this.props.data.display_name}</h3>
              <h3>Longitude : {this.props.data.lon}</h3>
              <h3>Latitude : {this.props.data.lat}</h3>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DataCard;
