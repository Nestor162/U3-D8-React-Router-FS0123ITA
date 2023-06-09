import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../img/netflix_logo.png";
import avatar from "../img/avatar.png";
import kids from "../img/kids_icon.png";
import { Search, Bell } from "react-bootstrap-icons";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NetflixNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" variant="dark" className="px-4">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="Netflix Logo" width="148px" />
          </Link>
        </Navbar.Brand>

        <Navbar.Collapse id="mainNav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Link className={`nav-link ${location.pathname === "/" ? "active fw-bold" : ""}`} to="/">
              Home
            </Link>
            <Link className={`nav-link ${location.pathname === "/tv-shows" ? "active fw-bold" : ""}`} to="/tv-shows">
              TV Shows
            </Link>
            <Link className={`nav-link ${location.pathname === "/movies" ? "active fw-bold" : ""}`} to="/movies">
              Movies
            </Link>
            <Link
              className={`nav-link ${location.pathname === "/recently-added" ? "active fw-bold" : ""}`}
              to="/recently-added"
            >
              Recently Added
            </Link>
            <Link className={`nav-link ${location.pathname === "/my-list" ? "active fw-bold" : ""}`} to="/my-list">
              My List
            </Link>
          </Nav>
        </Navbar.Collapse>
        <div id="right-icons" className="d-flex gap-3 align-items-center text-light">
          <Search size={20}></Search>
          <span>KIDS</span>
          <Bell size={20}></Bell>
          <div className="dropdown">
            <NavDropdown title={<img src={avatar} alt="User Avatar" width="48px" />} id="basic-nav-dropdown">
              <NavDropdown.Item className="text-light" href="#">
                <img src={kids} alt="User Avatar" width="48px" /> Kids
              </NavDropdown.Item>
              <NavDropdown.Item className="text-light" href="#">
                Manage Profiles
              </NavDropdown.Item>

              <hr className="dropdown-divider" />

              <NavDropdown.Item
                className="text-light"
                onClick={() => {
                  navigate("/account");
                }}
              >
                Edit Profile
              </NavDropdown.Item>
              <NavDropdown.Item
                className="text-light"
                onClick={() => {
                  navigate("/settings");
                }}
              >
                Account
              </NavDropdown.Item>
              <NavDropdown.Item className="text-light" href="#">
                Help Center
              </NavDropdown.Item>

              <hr className="dropdown-divider" />

              <NavDropdown.Item className="text-light" href="#">
                Sign out of NETFLIX
              </NavDropdown.Item>
            </NavDropdown>
          </div>

          <Navbar.Toggle />
        </div>
      </Container>
    </Navbar>
  );
};
export default NetflixNav;
