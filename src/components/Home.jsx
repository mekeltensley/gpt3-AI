import React, { Component } from "react";
import { Form, Container, Button, Card } from "react-bootstrap";
import Navbar from "./Navbar";

// const { Configuration, OpenAIApi } = require("openapi");

class Home extends Component {
    constructor() {
      super()
      this.state = {
        heading: "",
        response: "",
      };
    }

    formSubmit = e => {
      e.preventDefault();

      const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries());
      console.log(formDataObj.restaurantReview);

      this.setState({
          heading:`Your Personalized Review for: ${formDataObj.restaurantReview}`,
          response: `Awaiting Response from engine`
      })
    }

  //   componentDidMount() {
  //     const configuration = new Configuration({
  //       apiKey: process.env.OPENAI_API_KEY,
  //     });
  //     const openai = new OpenAIApi(configuration);

  //     openai
  //       .createCompletion("text-curie-001", {
  //         prompt: `Write a restaurant review based on these notes:\n\nName: ${formDataObj.restaurantReview}, noisy, service polite, prices good.\n\nReview: The Blue Wharf is a great place to go for a lobster dinner. The service is polite and the prices are good. The only downside is that it is a bit noisy.`,
  //         temperature: 0.5,
  //         max_tokens: 64,
  //         top_p: 1,
  //         frequency_penalty: 0,
  //         presence_penalty: 0,
  //       })
  //       .then((response) => {
  //         this.setState({
  //           heading: `Restaurant Review for: ${formDataObj.restaurantReview}`,
  //           response: `${response.data.choices[0].text}`,
  //         });
  //       });
  //   }

  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <br />
          <h1>Leaving Restaurant Reviews Just Got Easier</h1>
          <br/>
          <h5>
            Want to leave a review but you don't know what to say.
            <br /> Review Buddy is here to help
          </h5>
          <br />
          <hr />
          <Form onSubmit={this.formSubmit}>
            <Form.Group className="mb-3">
              <br />
              <Form.Label>
                Share the name of the restaurant and your throughts on your
                experience below
              </Form.Label>
            </Form.Group>
            <br />
            <Form.Control
              type="text"
              name="restaurantReview"
              placeholder="Enter Restaurant Name and Experience Here"
            />
            <Form.Text>
                Be very descriptive to receive an accurate personalized review :)
            </Form.Text>
            <Form.Group className="mb-3">
              <br />
              <br />
              <br />
              <Form.Label>Select Review Engine</Form.Label> <br />
              <br />
              <Form.Select>
                <option>Choose an Engine</option>
                <option>Engine #1</option>
                <option>Engine #2</option>
                <option>Engine #3</option>
              </Form.Select>
              <Form.Text muted>FYI: A review engine is ...</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <br />
          <hr />
          <br />
          <Card>
            <Card.Body>
              <Form.Group className="personalized-review">
                <Card.Title>
                  <h5>{this.state.heading}</h5>
                </Card.Title>
                <br />
                <br />
                <Form.Text id="ai-reponse" muted>
                  {this.state.response}
                </Form.Text>
              </Form.Group>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Home;
