import React, { Component } from "react";
import Maps from "./Maps";
import Form from "./Form";
import WeatherForm from "./WeatherForm";
import Error from "./Error";

import ErrorWeather from "./ErrorWeather";

import axios from "axios";
import DataCard from "./DataCard";
import WeatherDataCard from "./WeatherDataCard";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: "",
      lat: "",
      lon: "",
      location: "",
      LocationError: "",
      WeatherError: "",
      weather: null,
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

        location: location,
        LocationError: "",
      });
    } catch (e) {
      console.log("err");
      this.setState({
        LocationError: e.message,
      });
    }
  };

  getWeatherData = async (location, lat, long) => {
    let URL = process.env.REACT_APP_API_URL + "/weather?";
    let query = "city=" + location;
    query += "&lat=" + lat;
    query += "&long=" + long;
    URL += query;

    console.log(URL);
    try {
      let weatherResult = await axios.get(URL);
      console.log(weatherResult);
      let error = "";

      if (weatherResult.data.error != undefined)
        error = weatherResult.data.error + " " + weatherResult.data.code;
      this.setState({
        weather: weatherResult.data,
        WeatherError: error,
      });
    } catch (e) {
      console.log("err");
      this.setState({
        WeatherError: e.message,
      });
    }
  };

  render() {
    return (
      <>
        <div>
          <div>
            <Form submitHandler={this.getLocationData}></Form>
            <Error error={this.state.LocationError}></Error>
            <DataCard data={this.state}></DataCard>
            <Maps data={this.state}></Maps>
          </div>
          <div>
            <WeatherForm submitHandler={this.getWeatherData}></WeatherForm>
            <ErrorWeather error={this.state.WeatherError}></ErrorWeather>
            <WeatherDataCard data={this.state.weather}></WeatherDataCard>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
