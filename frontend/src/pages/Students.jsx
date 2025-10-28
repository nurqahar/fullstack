import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        add: !state.add,
        upload: state.upload,
        error: null,
      };
    case "UPLOAD":
      return {
        ...state,
        add: state.add,
        upload: !state.upload,
        error: null,
      };
    case "SUBMIT":
      return {
        ...state,
        add: false,
        upload: false,
        submit: !state.submit,
        error: null,
      };

    default:
      return state;
  }
}

export default function Students() {
  const [state, dispatch] = useReducer(reducer, {
    add: false,
    upload: false,
    submit: false,
    error: null,
  });

  const handleAddStudent = () => {
    dispatch({ type: "ADD" });
  };
  const handleUploadStudent = () => {
    dispatch({ type: "UPLOAD" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT" });
    setTimeout(() => {
      dispatch({ type: "SUBMIT" });
    }, 2000);
  };

  return (
    <Container className="mt-5" data-bs-theme="dark">
      {state.submit ? (
        <Container className="position-absolute">
          <Alert
            variant="success"
            className="text-center position-absolute top-20 end-0"
          >
            Success Submit!
          </Alert>
        </Container>
      ) : (
        ""
      )}
      <h1>Students</h1>
      <p>Manage student information</p>
      <Row>
        <Col className="d-flex justify-content-end">
          <div className="mb-3 d-flex gap-2">
            <Button
              variant={state.add ? "light" : "outline-light"}
              onClick={handleAddStudent}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="20"
                fill="currentColor"
                className="bi bi-plus"
                viewBox="0 0 16 20"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
              Add Student
            </Button>
            <Button
              variant={state.upload ? "primary" : "outline-primary"}
              onClick={handleUploadStudent}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-cloud-arrow-up"
                viewBox="0 0 16 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z"
                />
                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
              </svg>
              Upload File
            </Button>
          </div>
        </Col>
      </Row>
      {state.add ? (
        <Form className="mb-5 w-50 m-auto border p-4">
          <h4 className="fw-bold">Add Student</h4>
          <Form.Group>
            <Form.Label>Student ID</Form.Label>
            <Form.Control type="text" placeholder="Enter Student ID" />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Student Name" />
          </Form.Group>
          <Button
            variant="success"
            type="submit"
            className="mt-3 w-100"
            onClick={() => {
              handleSubmit;
            }}
          >
            Add Student
          </Button>
        </Form>
      ) : (
        ""
      )}
      {state.upload ? (
        <Form className="mb-5 w-50 m-auto border p-4">
          <h4 className="fw-bold">Upload Students File</h4>
          <p className="text-warning">File Format must be .csv</p>
          <Form.Group>
            <Form.Control type="file" accept=".csv" />
          </Form.Group>
          <Button
            variant="success"
            type="submit"
            className="mt-3 w-100"
            onClick={handleSubmit}
          >
            Upload Files
          </Button>
        </Form>
      ) : (
        ""
      )}
      <Table stripped="true" bordered hover className="text-center">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="align-middle">1</td>
            <td className="align-middle">Mark</td>
            <td className="d-flex justify-content-center gap-2">
              <Button variant="warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="20"
                  fill="currentColor"
                  className="bi bi-pen"
                  viewBox="0 0 16 20"
                >
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                </svg>
              </Button>
              <Button variant="danger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="20"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 20"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
