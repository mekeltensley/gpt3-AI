import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./Navbar.css";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" className="navigation">
          <Container>
            <Navbar.Brand href="/" style={{ fontFamily: "Alfa Slab One, cursive", color: "#957fef" }}>Review Buddy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#about" style={{ color: "#957fef", fontFamily: "Alfa Slab One, cursive" }}>About</Nav.Link>
                <Nav.Link href="reviewed-restaurants" style={{ color: "#957fef", fontFamily: "Alfa Slab One, cursive" }}>Reviewed Restaurants</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
