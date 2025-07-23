import Option from "./Option";
import Timer from "./Timer";
import classes from "./Card.module.css";
import Button from "./Button";

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
  const isLastQuestion = questionNumber === totalQuestions;

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
          <Button 
            onNext={onNext}
            onPrevious={onPrevious}
            questionNumber={questionNumber}
            isLast={isLastQuestion}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;