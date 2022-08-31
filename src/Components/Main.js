import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import MainLocation from "./LocationComponents/MainLocationComponent";
import MainWeather from "./WeatherComponents/MainWeatherComponent";
import MainMovies from "./MoviesComponents/MainMoviesComponent";

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
      weatherData: null,
    };
  }

  getLocationData = async (location) => {
    let URL = `https://us1.locationiq.com/v1/search?`;
    let key = process.env.REACT_APP_API_TOKEN;
    URL += "key=" + key;
    let query = "&q=" + location;
    URL += query;
    let format = "&format=json";
    URL += format;

    try {
      await axios.get(URL).then((res) => {
        let resResult = res;
        let lat = resResult.data[0].lat;
        let lon = resResult.data[0].lon;
        this.setState({
          display_name: resResult.data[0].display_name,
          lat: lat,
          lon: lon,
          location: location,
          LocationError: "",
          MoviesData: [],
        });
        this.getWeatherData(location, lat, lon);
        this.getMovies(location);
      });
    } catch (e) {
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
      await axios.get(URL).then((res) => {
        let weatherResult = res;
        this.setState({
          weatherData: weatherResult.data,
          WeatherError: "",
        });
      });
    } catch (e) {
      console.log("err");
      this.setState({
        WeatherError: e.message,
      });
    }
  };

  getMovies = async (location) => {
    let URL = process.env.REACT_APP_API_URL + "/movies?";
    let query = "city=" + location;
    URL += query;
    console.log(URL);
    try {
      await axios.get(URL).then((res) => {
        let moviesData = res;
        this.setState({
          MoviesData: moviesData.data,
        });
      });
    } catch {
      console.log("movies api error");
    }
  };

  render() {
    return (
      <div>
        <MainLocation submitHandler={this.getLocationData} Data={this.state} />
        <div>
          <MainWeather Data={this.state} />
        </div>

        <div>
          <MainMovies Data={this.state} />
        </div>
      </div>
    );
  }
}

export default Main;

/*

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

*/
