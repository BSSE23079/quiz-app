import classes from "./Option.module.css";

const Option = ({ option, isSelected, isCorrect, showResult, onClick }) => {
  let buttonClass = classes.optionButton;

  if (showResult) {
    if (isCorrect) {
      buttonClass = classes.correct; 
    } else if (isSelected && !isCorrect) {
      buttonClass = classes.incorrect; 
    }
  } else {
    buttonClass = isSelected ? classes.selected : classes.optionButton;
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {option.name}
    </button>
  );
};

export default Option;
