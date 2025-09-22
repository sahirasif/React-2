import { useEffect, useState } from "react";

function QuizApp() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        // Shuffle answers for each question
        const formatted = data.results.map((q) => {
          const answers = [...q.incorrect_answers, q.correct_answer];
          return {
            question: q.question,
            correct: q.correct_answer,
            answers: answers.sort(() => Math.random() - 0.5),
          };
        });
        setQuestions(formatted);
      });
  }, []);

  if (questions.length === 0) return <p>Loading questions...</p>;

  const currentQ = questions[currentIndex];

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === currentQ.correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div style={styles.container}>
        <h2>🎉 Quiz Finished!</h2>
        <p style={styles.score}>
          Your Score: <b>{score}</b> / {questions.length}
        </p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h3
        dangerouslySetInnerHTML={{ __html: `Q${currentIndex + 1}. ${currentQ.question}` }}
      />

      <div style={styles.answersBox}>
        {currentQ.answers.map((answer, i) => {
          // Highlighting logic
          let bg = "white";
          if (selectedAnswer) {
            if (answer === currentQ.correct) {
              bg = "lightgreen"; // always show correct as green
            } else if (answer === selectedAnswer) {
              bg = "salmon"; // wrong selected becomes red
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleAnswerClick(answer)}
              disabled={selectedAnswer !== null}
              style={{
                ...styles.answerBtn,
                backgroundColor: bg,
              }}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>

      {selectedAnswer && (
        <button onClick={handleNext} style={styles.nextBtn}>
          {currentIndex + 1 < questions.length ? "Next Question ➡️" : "Finish Quiz ✅"}
        </button>
      )}
    </div>
  );
}

// 🎨 Inline styles (you can move to CSS)
const styles = {
  container: {
    maxWidth: "600px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  },
  answersBox: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "20px",
  },
  answerBtn: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    cursor: "pointer",
    transition: "0.3s",
    fontSize: "16px",
  },
  nextBtn: {
    marginTop: "20px",
    padding: "10px 20px",
    borderRadius: "8px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
  score: {
    fontSize: "18px",
    color: "#333",
  },
};

export default QuizApp;
