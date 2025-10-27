import Container from "react-bootstrap/Container";

export default function Homepage() {
  return (
    <Container className="mt-5">
      <h1 className="fw-bold">Teaching Notes Application</h1>
      <p className="w-50">
        Simplify your day. Track attendance, share resources, and manage your
        teaching notes—all from a single, secure dashboard. Designed for
        teachers, by teachers.
      </p>
      <a href="/login" className="btn btn-primary">
        Get Started
      </a>
    </Container>
  );
}
