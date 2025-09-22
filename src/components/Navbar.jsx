import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">🚀 React Projects</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/todo">Todo</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/form">Form</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
