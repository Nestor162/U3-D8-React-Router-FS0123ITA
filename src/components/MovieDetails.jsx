import { useEffect, useState } from "react";
import { Alert, Badge, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();

  const [movie, setMovie] = useState({});
  const [comments, setComments] = useState([]);

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

  const fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + params.movieId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhZThlNTY4MzQzMTAwMTRkZWE3ZWYiLCJpYXQiOjE2ODA1MzM3MzMsImV4cCI6MTY4MTc0MzMzM30.BybWrL_zO0q23jXsrG8pA-yPWXt9QYBf4zZcRNL920U"
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("C'e stato un errore nella richiesta al server");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setComments(data);
      })
      .catch(error => {
        throw new Error(error);
      });
  };

  useEffect(() => {
    fetchMovie();
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row className="my-5">
      <Col xs={9} className="mx-auto">
        <Card className="bg-dark text-light">
          <Row>
            <Col xs={4} className="my-auto">
              <Card.Img variant="top" src={movie.Poster} className="ms-3" />
            </Col>
            <Col xs={8}>
              <Card.Body>
                <Card.Title className="fs-3 fw-bold">{movie.Title}</Card.Title>
                <Card.Text>{movie.Plot}</Card.Text>
              </Card.Body>
              {comments.length > 0 ? (
                <ListGroup>
                  {comments.map(comment => (
                    <ListGroup.Item key={comment._id} className="text-white bg-success m-3">
                      <div>
                        <strong>{comment.author} </strong>
                        says:
                      </div>
                      <div>
                        <em>{comment.comment}</em>
                      </div>
                      {""}
                      <Badge> Rating: {comment.rate} / 5</Badge>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <Alert variant="warning" className="m-3">
                  No comments yet..
                </Alert>
              )}
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};
export default MovieDetails;
