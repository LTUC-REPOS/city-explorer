import React from "react";
import swal from "sweetalert";

class MainLocation extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.location.value);
    this.props.submitHandler(e.target.location.value);
  };

  ShowAlert = () => {
    swal({
      title: "Something Went Wrong",
      text: this.props.Data.LocationError,
      icon: "error",
      button: "Ok",
    });
  };

  render() {
    let URL = "https://maps.locationiq.com/v3/staticmap?";
    let key = "key=" + process.env.REACT_APP_API_TOKEN;
    let center = "&center=" + this.props.Data.lat + "," + this.props.Data.lon;
    let FullUrl = URL + key + center;
    console.log(this.props.Data);
    return (
      <div className="LocationContainer">
        {this.props.Data.LocationError !== "" ? this.ShowAlert() : ""}

        <div>
          <form onSubmit={this.onSubmit} className="LocationForm">
            <label>Enter Location</label>
            <input id="location" name="location"></input>
            <div>
              <input type={"submit"} value="Get Location"></input>
            </div>
          </form>
        </div>
        {this.props.Data.lat && (
          <>
            <div className="LocationData">
              <p>Data For {this.props.Data.location} </p>
              <p>Address : {this.props.Data.display_name}</p>
              <p>Longitude : {this.props.Data.lon}</p>
              <p>Latitude : {this.props.Data.lat}</p>
            </div>
            <div className="LocationMap">
              <img src={FullUrl} />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default MainLocation;
