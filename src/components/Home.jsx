import React, { Component } from "react";
import { Form, Container, Button, Card } from "react-bootstrap";
import Navbar from "./Navbar";


class Home extends Component {
  constructor() {
    super();
    this.state = {
      heading: "Response",
      response: "Responding",
    };
  }

  formSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj.restaurantName);
    console.log(formDataObj.restaurantDescription);

    const { Configuration, OpenAIApi } = require("openapi");

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    openai.createCompletion("text-curie-001", {
        prompt: `Write a restaurant review based on these notes:\n\nName: ${formDataObj.restaurantName} Description: ${formDataObj.restaurantDescription}\n\nReview: The Blue Wharf is a great place to go for a lobster dinner. The service is polite and the prices are good. The only downside is that it is a bit noisy.`,
        temperature: 0.5,
        max_tokens: 75,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((response) => {
        this.setState({
          heading: `Your Personalized Review for: ${formDataObj.restaurantName}`,
          response: `${response.data.choices[0].text}`,
        })
      });

    // this.setState({
    //   heading: `Your Personalized Review for: ${formDataObj.restaurantReview}`,
    //   response: `Awaiting Response from engine`,
    // });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <br />
          <h1>Leaving Restaurant Reviews Just Got Easier</h1>
          <br />
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
              name="restaurantName"
              placeholder="Enter restaurant name here"
            />
            <br/>
            <Form.Control
              type="text"
              name="restaurantDescription"
              placeholder="Describe your experience here"
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
