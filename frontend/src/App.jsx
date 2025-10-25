import { BrowserRouter, Route, Routes } from "react-router";
import Container from "react-bootstrap/Container";
import "./App.css";
import Login from "./pages/Login.jsx";
import Homepage from "./components/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
