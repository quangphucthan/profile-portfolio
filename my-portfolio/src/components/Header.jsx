import { NavBar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <NavBar bg="light" expand="lg">
      <Container>
        <NavBar.Brand as={Link} to="/">My Portfolio</NavBar.Brand>
        <NavBar.Toggle aria-controls="basic-navbar-nav" />

        <NavBar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </NavBar.Collapse>

      </Container>
    </NavBar>
  );
}