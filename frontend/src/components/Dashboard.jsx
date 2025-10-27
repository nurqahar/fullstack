import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Dashboard() {
  return (
    <Container className="mt-5 justify-content-center" data-bs-theme="dark">
      <Row className="text-center">
        <Col>
          <h1 className="fw-bold">Teaching Notes App</h1>
          <p className="w-50 mx-auto">
            Simplify your day. Track attendance, share resources, and manage
            your teaching notes—all from a single, secure dashboard. Designed
            for teachers, by teachers.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="text-center">
          <h2>Choose Menu to Start</h2>
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
