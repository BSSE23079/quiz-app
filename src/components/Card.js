import Option from "./Option";
import classes from "./Card.module.css";

const Card = ({
  question,
  options,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious,
  questionNumber,
  totalQuestions
}) => {
  return (
    <div className={classes.container}>
      <p>Question {questionNumber} of {totalQuestions}</p>
      <div className={classes.card}>
        <h3>{question}</h3>
  
        <div className={classes.options}>
          {options.map((option, index) => (
            <Option
              key={index}
              option={option}
              isSelected={option === selectedAnswer}
              onClick={() => onAnswerSelect(option)}
            />
          ))}
        </div>
        
        <div className={classes.navButtons}>
          <button 
            onClick={onPrevious}
            disabled={questionNumber === 1}
            className={classes.navButton}
          >
            Previous
          </button>
          <button 
            onClick={onNext}
            disabled={questionNumber === totalQuestions}
            className={classes.navButton}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;