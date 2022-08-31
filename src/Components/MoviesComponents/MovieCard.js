import React, { Component } from "react";

import swal from "sweetalert";

import BSCard from "react-bootstrap/Card";
import { Card, Button, CardGroup } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";

class Cards extends Component {
  onClicked = () => {
    this.props.clicked(this.props.movie);
  };
  render() {
    let url = `https://image.tmdb.org/t/p/w500`;
    return (
      <Card
        style={{
          height: "650px",
          border: "1px solid",
        }}
      >
        <Card.Img
          variant="top"
          src={url + this.props.movie.image_url}
          width={"100%"}
          height={"100%"}
          onClick={this.onClicked}
        />
      </Card>
    );
  }
}

export default Cards;
