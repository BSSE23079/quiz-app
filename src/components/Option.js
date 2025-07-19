import classes from "./Option.module.css";

const Option = ({ option, isSelected, onClick }) => {
  return (
    <button 
      className={`${classes.optionButton} ${isSelected ? classes.selected : ''}`}
      onClick={onClick}
    >
      {option}
    </button>
  );
};

export default Option;