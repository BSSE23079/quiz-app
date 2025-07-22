import classes from "./Option.module.css";

const Option = ({ option, isSelected, onClick }) => {
  let classNames = classes.optionButton;

  if (isSelected) {
    classNames += " " + (option.isCorrect ? classes.correct : classes.incorrect);
  }

  return (
    <button 
      className={classNames}
      onClick={onClick}
    >
      {option.name}
    </button>
  );
};

export default Option;
