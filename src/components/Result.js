import React from 'react';
import styles from './Result.module.css';
const Result = ({ score, quizData, onRestart }) => {
  return (
    <div className={styles.scoreSection}>
      <h2 className={styles.scoreTitle}>Your Score: {score} out of {quizData.length}</h2>
      <div className={styles.resultsContainer}>
        {quizData.map((question, index) => {
          const selectedOption = question.options.find(opt => opt.isUserSelected);
          const correctOption = question.options.find(opt => opt.isCorrect);
          
          return (
            <div key={index} className={styles.questionResult}>
              <h3 className={styles.questionText}>Q{index + 1}: {question.title}</h3>
              <div className={styles.answerSection}>
                <p className={styles.correctAnswer}>
                  Correct Answer: {correctOption.name}
                </p>
                {selectedOption ? (
                  <p className={selectedOption.isCorrect ? styles.userAnswerCorrect : styles.userAnswerIncorrect}>
                    Your Answer: {selectedOption.name}
                  </p>
                ) : (
                  <p className={styles.noAnswer}>
                    You didn't answer this question
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <button 
        onClick={onRestart}
        className={styles.restartButton}
      >
        Restart Quiz
      </button>
 
    </div>
  );
};

export default Result;