import { BrowserRouter, Route, Routes } from "react-router";
import Container from "react-bootstrap/Container";
import "./App.css";
import Login from "./pages/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import NavBar from "./components/NavBar.jsx";
import Students from "./pages/Students.jsx";
import Classes from "./pages/Classes.jsx";
import Teachers from "./pages/Teachers.jsx";
import StudentHistory from "./pages/StudentHistory.jsx";
import Subjects from "./pages/Subjects.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Container fluid className="m-0 p-0">
        <NavBar />
        <Routes>
          <Route index element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/studentHistory" element={<StudentHistory />} />
          <Route path="/subjects" element={<Subjects />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
