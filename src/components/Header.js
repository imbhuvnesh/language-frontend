import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  //   const navigate = useNavigate();
  return (
    <Navbar
      expand="sm"
      fixed="top"
      className="navbar shadow-sm px-4 mb-4"
      style={{ background: "#ff5722" }}
    >
      <Container>
        <Navbar.Brand>
          <span className="fw-bold">Language Seekho</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="respon    sive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link>
              <Link to="/" className="router-link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="router-link">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/courses" className="router-link">
                Courses
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/pay" className="router-link">
                Pay Now
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className="router-link">
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
