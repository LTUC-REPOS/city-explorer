import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import React from "react";

class MovieModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  Hide = () => {
    this.props.hideIt();
    this.setState({
      show: false,
    });
  };
  render() {
    console.log(this.props.movieCardData);
    let url = `https://image.tmdb.org/t/p/w500`;
    let title = "";
    let overview = "";
    let average_votes = "";
    let total_votes = "";
    let image_url = "";
    let popularity = "";
    let released_on = "";
    try {
      title = this.props.movieCardData.title;
      overview = this.props.movieCardData.overview;
      average_votes = this.props.movieCardData.average_votes;
      total_votes = this.props.movieCardData.total_votes;
      image_url = this.props.movieCardData.image_url;
      popularity = this.props.movieCardData.popularity;
      released_on = this.props.movieCardData.released_on;
    } catch {}

    return (
      <Modal
        show={this.props.show}
        onHide={this.Hide}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="lg"
      >
        <Modal.Header closeButton />

        <Modal.Body>
          <div style={{ textAlign: "center" }}>
            <h1>{title}</h1>
            <img src={url + image_url} width={"100%"} height={"700px"} />

            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                padding: "30px",
                fontSize: "24px",
              }}
            >
              <p>{overview}</p>
              <label>Rating : {average_votes}</label>
              <label>Votes : {total_votes}</label>
              <label>Populartiy :{popularity}</label>
              <label>Release Date : {released_on}</label>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default MovieModal;
