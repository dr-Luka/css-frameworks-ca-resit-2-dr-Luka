import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookSquare, faLinkedin);

export default function Navigation() {
  return (
    <Navbar expand="md" className="navbar">
      <Container fluid>
        <Navbar.Brand className="nav-logo" href="/">
          The NAY Company
          <div className="nav-icons">
            <FontAwesomeIcon icon={["fab", "facebook-square"]} />
            <span className="space"></span>
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/stats">Stats</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <div className="sign-up">
            <input
              className="nav-input"
              type="text"
              placeholder="Email"
            ></input>
            <button className="sign-up-button">Sign up</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
