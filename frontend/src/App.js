import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Agendamentos from "./pages/Agendamentos";
import Home from "./pages/Home";
import Consultar from "./pages/Consultar";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <a href="/">Home</a>
          <a href="/agendar">Agendar</a>
          <a href="/consultar">Agendamentos</a>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendar" element={<Agendamentos />} />
        <Route path="/consultar" element={<Consultar />} />
      </Routes>
    </Router>
  );
}

export default App;
