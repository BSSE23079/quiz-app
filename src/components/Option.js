import classes from "./Option.module.css";

const Option = ({ option, isSelected, onClick }) => {
  return (
    <button 
      className={isSelected ? classes.selected : classes.optionButton}
      onClick={onClick}
    >
      {option.name}
    </button>
  );
};

export default Option;