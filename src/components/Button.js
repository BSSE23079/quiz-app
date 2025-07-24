import classes from "./Card.module.css";

const Button = ({ onNext, onPrevious, isLast, questionNumber }) => {
  return (
    <div className={classes.navButtons}>
      <button
        onClick={onPrevious}
        disabled={questionNumber === 1}
        className={classes.navButton}
        style={{ marginRight: 'auto' }} 
      >
        Previous
      </button>
      <button onClick={onNext} className={classes.navButton}>
        {isLast ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default Button;