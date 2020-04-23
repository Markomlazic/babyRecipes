import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class NavbarNoButtons extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navbar className="navbar-container" expand="lg">
            <Navbar.Brand href="/" className="app-name text-light">
              <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              React-Babyrezepte
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="text-light" href="./">
                  Rezepte
                </Nav.Link>
                <Nav.Link className="text-light" href="./pagetwo">
                  Babys Ernährungsplan
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default NavbarNoButtons;
