import React, { Component } from "react";
import { Form, Container, Button, Card } from "react-bootstrap";
import Navbar from "./Navbar";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      heading: "",
      response: "Your Peronalized Review will Display Here",
    };
  }

  formSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());


    // const { Configuration, OpenAIApi } = require("openai");

    // const configuration = new Configuration({
    //   apiKey: process.env.OPENAI_API_KEY,
    // });
    
    // const openai = new OpenAIApi(configuration);
    
    // openai.createCompletion("text-davinci-002", {
    //   prompt: "Write a restaurant review based on these notes:\n\nName: The Blue Wharf\nLobster great, noisy, service polite, prices good.\n\nReview:",
    //   temperature: 0.5,
    //   max_tokens: 64,
    //   top_p: 1,
    //   frequency_penalty: 0,
    //   presence_penalty: 0,
    // })
    // .then((response) => {
    //       this.setState({
    //         heading: `Your Personalized Review for: ${formDataObj.restaurantName}`,
    //         response: `${response.data.choices[0].text}`,
    //       })
    //   });

    this.setState({
      heading: `Your Personalized Review for: ${formDataObj.restaurantName}`,
      response: `${formDataObj.restaurantDescription}`,
    });
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
            <Form.Control style={{ textAlign: "center" }}
              type="text"
              name="restaurantName"
              placeholder="Enter restaurant name here"
            />
            <br/>
            <Form.Control style={{ textAlign: "center" }}
              type="text"
              name="restaurantDescription"
              placeholder="Describe your experience here"
            />
            <Form.Text>
              (Be very descriptive to receive an accurate personalized review)
            </Form.Text>
            <br/>
            <br/>
            <Button variant="primary" type="submit" style={{ background: "#8e7dbe", color: "#7161ef", fontWeight: "600", border: "none", fontSize: "20px" }}>
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
