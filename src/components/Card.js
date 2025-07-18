import classes from './Card.module.css';
import Option from './Option';

const Card = ({ question }) => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <h3>{question.title}</h3>

        <div className={classes.options}>
          {question.options.map((option) => (
            <Option key={option.id} option={option} />
          ))}
        </div>

        <div className={classes.nextButtonWrapper}>
          <button className={classes.nextButton}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Card;