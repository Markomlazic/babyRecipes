import React from "react";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";

class NavbarComponent extends React.Component {
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
              <Form className="form-container">
                <Form.Label
                  className="form-label mr-3 mt-1 text-light"
                  htmlFor="month"
                >
                  Alter:{" "}
                </Form.Label>
                <Form.Control
                  size="sm"
                  className="form-age mr-3"
                  as="select"
                  id="month"
                  value={this.props.valueAge}
                  onChange={this.props.handleChangeAge}
                >
                  <option value="5" key="5">
                    5. Monat
                  </option>
                  <option value="7" key="7">
                    7. Monat
                  </option>
                  <option value="9" key="9">
                    9. Monat
                  </option>
                  <option value="12" key="12">
                    12. Monat
                  </option>
                  <option value="100" key="0">
                    Alle
                  </option>
                </Form.Control>
                <Form.Label
                  className="mr-3 mt-1 text-light breiart"
                  htmlFor="meal-type"
                >
                  Breiart:
                </Form.Label>
                <Form.Control
                  size="sm"
                  className="form-type mr-3"
                  as="select"
                  id="meal-type"
                  value={this.props.valueType}
                  onChange={this.props.handleChangeType}
                >
                  <option value="Abendbrei" key="Abendbrei">
                    Abendbrei
                  </option>
                  <option value="Mittagsbrei" key="Mittagsbrei">
                    Mittagsbrei
                  </option>
                  <option value="Nachmittagsbrei" key="Nachmittagsbrei">
                    Nachmittagsbrei
                  </option>
                  <option value="all" key="all">
                    Alle
                  </option>
                </Form.Control>
              </Form>
              <Button
                className="submit-button"
                variant="primary"
                size="sm"
                onClick={this.props.handleFilterRecipes}
              >
                Filtern
              </Button>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default NavbarComponent;
