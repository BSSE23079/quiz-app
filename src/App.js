import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const [quizData, setQuizData] = useState([
    {
      title: "What is the capital of Pakistan?",
      options: [
        { isUserSelected: false, name: "Lahore", id: 1, isCorrect: false },
        { isUserSelected: false, name: "Islamabad", id: 2, isCorrect: true },
        { isUserSelected: false, name: "Karachi", id: 3, isCorrect: false },
        { isUserSelected: false, name: "Multan", id: 4, isCorrect: false },
      ],
    },
    {
      title: "Which language is used for web apps?",
      options: [
        { isUserSelected: false, name: "Python", id: 1, isCorrect: false },
        { isUserSelected: false, name: "Java", id: 2, isCorrect: false },
        { isUserSelected: false, name: "JavaScript", id: 3, isCorrect: true },
        { isUserSelected: false, name: "C++", id: 4, isCorrect: false },
      ],
    },
    {
      title: "What is 2 + 2?",
      options: [
        { isUserSelected: false, name: "3", id: 1, isCorrect: false },
        { isUserSelected: false, name: "4", id: 2, isCorrect: true },
        { isUserSelected: false, name: "5", id: 3, isCorrect: false },
        { isUserSelected: false, name: "6", id: 4, isCorrect: false },
      ],
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (optionId) => {
    const updatedQuizData = [...quizData];
    const question = updatedQuizData[currentQuestion];

    question.options = question.options.map((option) => ({
      ...option,
      isUserSelected: false,
    }));

    const selectedOption = question.options.find(
      (option) => option.id === optionId
    );
    if (selectedOption) {
      selectedOption.isUserSelected = true;
    }

    setQuizData(updatedQuizData);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
      setShowScore(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleTimeUp = () => {
    if (currentQuestion < quizData.length - 1) {
      nextQuestion();
    } else {
      calculateScore();
      setShowScore(true);
    }
  };

  const calculateScore = () => {
    let newScore = 0;
    quizData.forEach((question) => {
      const selectedOption = question.options.find(
        (option) => option.isUserSelected
      );
      if (selectedOption && selectedOption.isCorrect) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  const restartQuiz = () => {
    const resetQuizData = quizData.map((question) => ({
      ...question,
      options: question.options.map((option) => ({
        ...option,
        isUserSelected: false,
      })),
    }));
    setQuizData(resetQuizData);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div>
      <Navbar /> 

 
       
      {showScore ? (
        <div
          className="score-section"
          style={{
            maxWidth: "600px",
            margin: "20px auto",
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h2>
            Your Score: {score} out of {quizData.length}
          </h2>
          <button
            onClick={restartQuiz}
            style={{
              padding: "10px 20px",
              background: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "20px",
            }}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <Card
          question={quizData[currentQuestion].title}
          options={quizData[currentQuestion].options}
          onAnswerSelect={handleAnswerSelect}
          onNext={nextQuestion}
          onPrevious={prevQuestion}
          questionNumber={currentQuestion + 1}
          totalQuestions={quizData.length}
          onTimeUp={handleTimeUp}
        />
      )}
    </div>
  );
}

export default App;
