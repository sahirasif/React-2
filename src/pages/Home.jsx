import { Link } from "react-router-dom";
import todoImg from "/screenshots/todo.png";
import quizImg from "/screenshots/quiz.png";
import formImg from "/screenshots/form.png";

function Home() {
  const projects = [
    { id: 1, title: "Todo App", image: todoImg, path: "/todo" },
    { id: 2, title: "Quiz App", image: quizImg, path: "/quiz" },
    { id: 3, title: "Multi-Step Form", image: formImg, path: "/form" },
  ];

  return (
    <div className="home-container">
      <h1>My React Toy Projects</h1>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="project-card">
            <img src={p.image} alt={p.title} className="project-img" />
            <h3>{p.title}</h3>
            <Link to={p.path} className="open-btn">Open</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
