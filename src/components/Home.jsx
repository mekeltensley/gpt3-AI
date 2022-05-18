import React, { Component } from "react";
import { Form, Container, Button } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <br />
          <h1>Leaving reviews just got easier</h1>
          <h3>
            Want to leave a review but you don't know what to say Review Buddy
            is here to help
          </h3>
          <br />
          <>
            <Form.Group className="mb-3">
              <Form.Label>Disabled input</Form.Label>
              <Form.Control placeholder="Disabled input" disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Disabled select menu</Form.Label>
              <Form.Select disabled>
                <option>Disabled select</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Can't check this" disabled />
            </Form.Group>
          </>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Container>
      </div>
    );
  }
}

export default Home;
