import React, { Component } from "react";
import Maps from "./Maps";
import Form from "./Form";
import Error from "./Error";
import axios from "axios";
import DataCard from "./DataCard";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: "",
      lat: "",
      lon: "",
      location: "",
      error: "",
    };
  }

  getLocationData = async (location) => {
    let URL = `https://us1.locationiq.com/v1/search?`;

    // Params
    let key = process.env.REACT_APP_API_TOKEN;
    URL += "key=" + key;
    let query = "&q=" + location;
    URL += query;
    let format = "&format=json";
    URL += format;
    console.log(URL);
    try {
      let resResult = await axios.get(URL);
      console.log(resResult);
      this.setState({
        display_name: resResult.data[0].display_name,
        lat: resResult.data[0].lat,
        lon: resResult.data[0].lon,
        mapFlag: true,
        location: location,
        error: "",
      });
    } catch (e) {
      console.log("err");
      this.setState({
        error: e.message,
      });
    }
  };

  render() {
    return (
      <>
        <Form submitHandler={this.getLocationData}></Form>
        <Error error={this.state.error}></Error>
        <DataCard data={this.state}></DataCard>
        <Maps data={this.state}></Maps>
      </>
    );
  }
}

export default Main;
