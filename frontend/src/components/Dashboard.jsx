import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Dashboard() {
  return (
    <Container className="mt-5 justify-content-center" data-bs-theme="dark">
      <Row className="text-center ">
        <Col>
          <h1>Choose Menu To Start</h1>
        </Col>
      </Row>
      <Row className="mt-5 ">
        <Col>
          <ul style={{ listStyleType: "None" }}>
            <li>Students</li>
            <li>Classes</li>
            <li>Subjects</li>
            <li>Teachers</li>
            <li>Students History</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
