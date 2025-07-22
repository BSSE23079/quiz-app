import { useEffect, useState } from "react";
import classes from "./Timer.module.css";

const Timer = ({ duration, onTimeUp, key }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [key, duration]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);

  const progressPercentage = (timeLeft / duration) * 100;

  return (
    <div className={classes.timerContainer}>
      <div 
        className={classes.progressBar}
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default Timer;