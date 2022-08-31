import React from "react";
import swal from "sweetalert";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MovieModal from "./MovieModal";
import MovieCard from "./MovieCard";

class MainMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  onClicked = (obj) => {
    console.log("Show Modal");
    this.setState({
      show: true,
      ModalData: obj,
    });
  };
  HideModal = () => {
    console.log("Hide Modal");
    this.setState({
      show: false,
    });
  };
  render() {
    let data = "";
    try {
      data = this.props.Data.MoviesData;
    } catch {
      data = "";
    }

    /*
           title: "London Has Fallen",
            overview:
          "In London for the Prime Minister's funeral, Mike Banning discovers a plot to assassinate all the attending world leaders.",
        average_votes: 6.1,
        total_votes: 4061,
        image_url: "/korY0GInEJThWEm23MRmErQ3GqT.jpg",
        popularity: 51.491,
        released_on: "2016-03-02",

    */

    return (
      <>
        {data && (
          <>
            <div className="Movies">
              <Row xs={1} md={3} className="g-4">
                {data.map((movie) => {
                  if (Object.keys(movie).length == 7) {
                    let desc = movie.overview.split(" ");
                    let newDesc = [];

                    if (desc.length > 50) {
                      for (let i = 0; i < 50; i++) newDesc.push(desc[i]);
                      newDesc.push(".....");
                      newDesc = newDesc.join(" ");
                    } else newDesc = desc.join(" ");

                    return (
                      <div className="movieCard">
                        <Col>
                          <MovieCard clicked={this.onClicked} movie={movie} />
                        </Col>
                      </div>
                    );
                  }
                })}
              </Row>
            </div>
            <MovieModal
              show={this.state.show}
              hideIt={this.HideModal}
              movieCardData={this.state.ModalData}
            />
          </>
        )}
      </>
    );
  }
}

export default MainMovies;

/*
                      <Card.Body>
                        { <Card.Title>{movie.title}</Card.Title>
                      <Card.Text>{newDesc}</Card.Text> }
                      </Card.Body>
*/
