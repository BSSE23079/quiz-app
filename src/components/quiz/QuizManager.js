import { useState } from "react";
import QuestionCard from "./QuestionCard";
import Timer from "../common/Timer/Timer";
import Result from "./Result.js";
import styles from "./QuizManager.module.css";
import classes from "./QuestionCard.module.css";
import Button from "../common/Button/Button";

const QuizManager = ({ quizData: initialQuizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [quizData, setQuizData] = useState(initialQuizData);
  const [showTimer, setShowTimer] = useState(true);

  const handleAnswerSelect = (optionId) => {
    const updatedQuizData = quizData.map((question, qIndex) => {
      if (qIndex === currentQuestion) {
        return {
          ...question,
          options: question.options.map((option) => ({
            ...option,
            isUserSelected: option.id === optionId,
          })),
        };
      }
      return question;
    });

    setQuizData(updatedQuizData);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowTimer(true); 
    } else {
      calculateScore();
      setShowScore(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowTimer(false); 
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

  const totalQusetionCount = quizData.length;

  return (
    <div className={styles.quizContainer}>
      {showScore ? (
        <Result score={score} quizData={quizData} onRestart={restartQuiz} />
      ) : (
        <div className={classes.container}>
          <p>
            Question {currentQuestion + 1} of {totalQusetionCount}
          </p>

          {showTimer && (
            <Timer
              duration={10}
              onTimeUp={nextQuestion}
              curentQuestionNumber={currentQuestion}
            />
          )}

          <QuestionCard
            question={quizData[currentQuestion]}
            onAnswerSelect={handleAnswerSelect}
          />

          <div className={classes.navButtons}>
            <Button
              style={{ background: "red" }}
              onClick={prevQuestion}
              className={classes.navButton}
            >
              Previous
            </Button>
            <Button onClick={nextQuestion} className={classes.navButton}>
              {currentQuestion + 1 === totalQusetionCount ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizManager;
