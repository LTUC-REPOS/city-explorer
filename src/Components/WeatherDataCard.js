import React, { Component } from "react";

class WeatherDataCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let headers = "";
    if (this.props.data != undefined || this.props.data != null) {
      try {
        headers = this.props.data.map((i) => {
          console.log(i);
          return (
            <div>
              <h2>
                For {i.date} the {i.description}
              </h2>
            </div>
          );
        });
      } catch (error) {}
    }
    return (
      <>
        <div style={{ textAlign: "center", padding: 50 }}>
          <div
            style={{
              width: "60%",
              textAlign: "left",
            }}
          >
            {headers}
          </div>
        </div>
      </>
    );
  }
}

export default WeatherDataCard;
