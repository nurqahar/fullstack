import { BrowserRouter, Route, Routes } from "react-router";
import Container from "react-bootstrap/Container";
import "./App.css";
import Login from "./pages/Login.jsx";
import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
