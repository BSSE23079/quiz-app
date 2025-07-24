import { useState } from 'react';
import Card from './Card';
import Results from './Result';
import styles from './QuizManager.module.css';

const QuizManager = ({ quizData: initialQuizData }) => {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [quizData, setQuizData] = useState(initialQuizData);

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
    <div className={styles.quizContainer}>
      {showScore ? (
        <Results 
          score={score} 
          quizData={quizData} 
          onRestart={restartQuiz} 
        />
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
};

export default QuizManager;