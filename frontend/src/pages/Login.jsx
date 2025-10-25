import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./css/Login.css";

function Login() {
  return (
    <Container className="vh-100 border" data-bs-theme="dark">
      <Container className="border p-5 w-50 mx-auto" id="login-card">
        <Row>
          <Col className="text-center mb-4">
            <h2>TEACHING NOTES APP</h2>
            <p>Sign in to access the Teaching Management System</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
              </Form.Group>
              <Button variant="light" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Login;
