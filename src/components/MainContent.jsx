import { Container } from "react-bootstrap";
import Filters from "./Filters";
import MovieCarousel from "./MovieCarousel";

const MainContent = () => (
  <>
    <Filters />
    <Container className="mb-4">
      <h3 className="text-white pt-3">Trending Now</h3>
      <MovieCarousel query="s=one%20piece" />
    </Container>
    <Container className="mb-4">
      <h3 className="text-white pt-3">Watch It again</h3>
      <MovieCarousel query="s=star%20wars" />
    </Container>
    <Container className="mb-4">
      <h3 className="text-white pt-3">New Releases</h3>
      <MovieCarousel query="s=demon%20slayer" />
    </Container>
  </>
);

export default MainContent;
