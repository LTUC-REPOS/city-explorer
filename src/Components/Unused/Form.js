import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//import "bootstrap/dist/css/bootstrap.min.css";

class SubmitForms extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  Save = (e) => {
    e.preventDefault();
    this.props.submitHandler(e.target.location.value);
  };

  render() {
    return (
      <form
        style={{
          textAlign: "center",
          fontSize: 40,
          padding: 50,
          backgroundColor: "red",
          display: "flex",
        }}
        onSubmit={this.Save}
      >
        <input
          name="location"
          placeholder="Type your location here"
          type="text"
          styles={{ height: "50%", paddingRight: "150px" }}
        />
      </form>
    );
  }
}

export default SubmitForms;
