import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TodoApp from "./components/TodoApp";
import QuizApp from "./components/QuizApp";
import MultiStepForm from "./components/MultiStepForm";
import "./style.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/quiz" element={<QuizApp />} />
          <Route path="/form" element={<MultiStepForm />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
