import { Component } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

class MovieCards extends Component {
  state = {
    movies: [],
    error: false,
    errorMsg: "",
    isLoading: true
  };

  fetchMovies = query => {
    fetch(`https://www.omdbapi.com/?apikey=69f0bbd5&${query}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("C'e stato un errore nella richiesta al server");
        }
        return response.json();
      })
      .then(data => {
        this.setState({ isLoading: false, movies: data.Search });
      })
      .catch(error => this.setState({ errorMsg: error.message, error: true, isLoading: false }));
  };

  componentDidMount() {
    this.fetchMovies(this.props.query);
  }

  render() {
    return (
      <>
        {this.state.isLoading && !this.state.error && (
          <div className="customSpinner">
            <Spinner animation="border" variant="danger" />
          </div>
        )}

        {this.state.movies.slice(0, 6).map((movie, i) => (
          <Link to={"/movie-details/" + movie.imdbID} className="col-xl-2 col-md-4 pb-2 col-sm-6 px-1" key={i}>
            <div className="ImgContainer">
              <img className="img-fluid ImgCard" src={movie.Poster} alt={movie.title} />
            </div>
          </Link>
        ))}
      </>
    );
  }
}

export default MovieCards;
