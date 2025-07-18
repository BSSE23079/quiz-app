import classes from './Option.module.css';

const Option = ({ option }) => {
  return (
    <button 
      className={`${classes.optionButton} ${option.selected ? classes.selected : ''}`}
      onClick={() => option.onSelect && option.onSelect(option.id)}
    >
      <span className={classes.optionId}>{option.id}</span>
      <span className={classes.optionText}>{option.name}</span>
    </button>
  );
};

export default Option;