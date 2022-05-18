import React, { Component } from "react";
import { Form, Container, Button } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <br />
          <h1>Leaving Restaurant Reviews Just Got Easier</h1>
          <h3>
            Want to leave a review but you don't know what to say.
            <br /> Review Buddy is here to help
          </h3>
          <br />
          <Form onSubmit={this.onFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>
                Share the name of the restaurant and your throughts on your
                experience
              </Form.Label>
            </Form.Group>
            <br />
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Group className="mb-3">
              <br />
              <Form.Label>Select Review Engine</Form.Label> <br />
              <br />
              <Form.Select size="lg">
                <option>Choose an Engine</option>
                <option>Engine #1</option>
                <option>Engine #2</option>
                <option>Engine #3</option>
              </Form.Select>
            </Form.Group>
            <br />
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <br />
          <Form.Group className="personalized-review">
            <Form.Label>Your personalized review from the AI engine</Form.Label> <br />
            <br />
            <Form.Control disabled />
          </Form.Group>
        </Container>
      </div>
    );
  }
}

export default Home;
