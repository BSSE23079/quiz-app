import React from "react";
import styles from "./Result.module.css";
import QuestionCard from "./QuestionCard";

const Result = ({ score, quizData, onRestart }) => {
  return (
    <div className={styles.scoreSection}>
      <h2 className={styles.scoreTitle}>
        Your Score: {score} out of {quizData.length}
      </h2>

      <div className={styles.resultsContainer}>
        {quizData.map((question, index) => {
          const selectedOption = question.options.find(
            (opt) => opt.isUserSelected
          );

          return (
            <div key={index} className={styles.questionResult}>
              <QuestionCard question={question} showResult={true} />

              {!selectedOption && (
                <p className={styles.noAnswer}>You didn’t select any option</p>
              )}
            </div>
          );
        })}
      </div>

      <button onClick={onRestart} className={styles.restartButton}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
