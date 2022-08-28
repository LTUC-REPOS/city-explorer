import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div>
        <Form
          style={{
            textAlign: "center",
            fontSize: 40,
            padding: 50,
          }}
          onSubmit={this.Save}
        >
          <Form.Group className="mb-4">
            <Form.Label htmlFor="disabledTextInput">Location : </Form.Label>

            <input
              name="location"
              placeholder="Type your location here"
              type="text"
              styles={{ width: "10px", margin: "120px" }}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default SubmitForms;
