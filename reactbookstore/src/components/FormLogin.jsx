import { Container, Form, Button, Col } from "react-bootstrap";

const FormLogin = ({ history }) => {
  return (
    <Container>
      <h1>B-b-b-books</h1>

      <Form>
        <h5>Name</h5>
        <Form.Group controlId="formBasicPassword">
          <Form.Row>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            history.push("/");
          }}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default FormLogin;
