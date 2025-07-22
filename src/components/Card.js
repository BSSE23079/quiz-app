import Option from "./Option";
import Timer from "./Timer";
import classes from "./Card.module.css";

const Card = ({
  question,
  options,
  onAnswerSelect,
  onNext,
  onPrevious,
  questionNumber,
  totalQuestions,
  onTimeUp
}) => {
  return (
    <div className={classes.container}>
      <p>Question {questionNumber} of {totalQuestions}</p>
      <div className={classes.card}>
        <h3>{question}</h3>
 
        <Timer 
          duration={20} 
          onTimeUp={onTimeUp} 
          key={questionNumber} 
        />

        <div className={classes.options}>
          {options.map((option) => (
            <Option
              key={option.id}
              option={option}
              isSelected={option.isUserSelected}
              onClick={() => onAnswerSelect(option.id)}
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
