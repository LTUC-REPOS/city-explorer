import React, { Component } from "react";

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let URL = "https://maps.locationiq.com/v3/staticmap?";
    let key = "key=" + process.env.REACT_APP_API_TOKEN;
    let center = "&center=" + this.props.data.lat + "," + this.props.data.lon;
    let FullUrl = URL + key + center;

    return (
      <>
        <div>
          <img style={{ borderRadius: 150 }} src={FullUrl}></img>
        </div>
      </>
    );
  }
}

export default Maps;
