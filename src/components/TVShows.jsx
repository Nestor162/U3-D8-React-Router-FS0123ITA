import { Container } from "react-bootstrap";
import MovieCarousel from "./MovieCarousel";

const TVShows = () => {
  return (
    <Container>
      <h2 className="fw-bold text-light">TV shows</h2>
      <Container className="mb-4">
        <h3 className="text-white pt-3">Trending Now</h3>
        <MovieCarousel query="s=dragon%20ball&type=series" />
      </Container>
      <Container className="mb-4">
        <h3 className="text-white pt-3">Watch It again</h3>
        <MovieCarousel query="s=twilight%20zone&type=series" />
      </Container>
      <Container className="mb-4">
        <h3 className="text-white pt-3">New Releases</h3>
        <MovieCarousel query="s=star-trek&type=series" />
      </Container>
    </Container>
  );
};

export default TVShows;
