import { Container, Form, Button, Col } from "react-bootstrap";
import { Component } from "react";
import { withRouter } from "react-router-dom";

class FormLogin extends Component {
  state = {
    loginDetails: {
      firstName: "",
      lastName: "",
      email: "",
      firstPw: "",
      secondPw: "",
    },
    preventSubmit: true,
  };

  handleInput = (e, propertyName) => {
    this.setState({
      loginDetails: {
        ...this.state.loginDetails,
        [propertyName]: e.target.value,
      },
    });
    console.log(this.state.propertyName);
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.loginDetails);
    // this.props.history.push("/");
  };

  render() {
    return (
      <Container>
        <h1>B-b-b-books</h1>

        <Form onSubmit={this.onSubmit}>
          {/* <Form> */}
          <h5>Name</h5>
          <Form.Group controlId="formBasicPassword">
            <Form.Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="First name"
                  value={this.state.loginDetails.firstName}
                  onChange={(e) => this.handleInput(e, "firstName")}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  value={this.state.loginDetails.lastName}
                  onChange={(e) => this.handleInput(e, "lastName")}
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={this.state.loginDetails.email}
              onChange={(e) => this.handleInput(e, "email")}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={this.state.loginDetails.firstPw}
              onChange={(e) => this.handleInput(e, "firstPw")}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={this.state.loginDetails.secondPw}
              onChange={(e) => this.handleInput(e, "secondPw")}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(FormLogin);
