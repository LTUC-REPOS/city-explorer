import React from "react";
import swal from "sweetalert";

class MainWeather extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let pArrays = [];
    let firstCol = [];
    let secondCol = [];
    try {
      pArrays = this.props.Data.weatherData.map((weatherCard) => {
        return (
          <p>
            For {weatherCard.date} Its {weatherCard.description}
          </p>
        );
      });

      for (let i = 0; i < pArrays.length; i++) {
        if (i <= 7) firstCol.push(pArrays[i]);
        else secondCol.push(pArrays[i]);
      }
      console.log(pArrays);
    } catch {}

    return (
      <>
        {this.props.Data.location && (
          <label className="MainWeatherLabel">
            For {this.props.Data.location}
          </label>
        )}
        <div className="WeatherDataContainer">
          <div className="WeatherDataCol">{firstCol}</div>
          <div className="WeatherDataCol">{secondCol}</div>
        </div>
      </>
    );
  }
}

export default MainWeather;
