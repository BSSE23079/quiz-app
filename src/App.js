import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const quizData = [
    {
      question: "Where is Lahore located?",
      options: ["Punjab", "Sindh", "Balochistan", "KPK"],
      correctAnswer: "Punjab"
    },
    {
      question: "What is capital of Pakistan?",
      options: ["Lahore", "Islamabad", "Karachi", "Quetta"],
      correctAnswer: "Islamabad"
    },
    {
      question: "Which device is required for the Internet Connection?",
      options: ["Modem", "Router", "LAN Cable", "Pen Drive"],
      correctAnswer: "Modem"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

 const nextQuestion = () => {
  setSelectedAnswer(null);
  setCurrentQuestion(prev => 
    prev === quizData.length - 1 ? 0 : prev + 1
  );
};

const prevQuestion = () => {
  setSelectedAnswer(null);
  setCurrentQuestion(prev => 
    prev === 0 ? quizData.length - 1 : prev - 1
  );
};

  return (
    <div>
      <Navbar />
      <Card 
        question={quizData[currentQuestion].question}
        options={quizData[currentQuestion].options}
        correctAnswer={quizData[currentQuestion].correctAnswer}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={setSelectedAnswer}
        onNext={nextQuestion}
        onPrevious={prevQuestion}
        questionNumber={currentQuestion + 1}
        totalQuestions={quizData.length}
      />
    </div>
  );
}

export default App;