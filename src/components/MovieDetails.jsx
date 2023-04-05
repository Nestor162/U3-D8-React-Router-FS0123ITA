import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();

  const [movie, setMovie] = useState({});

  const fetchMovie = () => {
    fetch(`https://www.omdbapi.com/?apikey=69f0bbd5&i=${params.movieId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("C'e stato un errore nella richiesta al server");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setMovie(data);
      })
      .catch(error => {
        throw new Error(error);
      });
  };

  useEffect(() => {
    fetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row>
      <Col xs={9} className="mx-auto">
        <Card className="bg-dark text-light">
          <Row>
            <Col xs={4}>
              <Card.Img variant="top" src={movie.Poster} />
            </Col>
            <Col xs={8}>
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Plot}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};
export default MovieDetails;
