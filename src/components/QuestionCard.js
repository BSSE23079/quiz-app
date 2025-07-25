import Option from "./Option";
import classes from "./QuestionCard.module.css";

const QuestionCard = ({
  onAnswerSelect = () => {},
  question,
  showResult = false, 
}) => {
  return (
    <div className={classes.card}>
      <h3>{question.title}</h3>

      <div className={classes.options}>
        {question.options.map((option) => (
          <Option
            key={option.id}
            option={option}
            isSelected={option.isUserSelected}
            isCorrect={option.isCorrect}
            showResult={showResult}
            onClick={() =>
              !showResult && onAnswerSelect && onAnswerSelect(option.id)
            } 
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
