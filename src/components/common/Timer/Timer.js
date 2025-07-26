import { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Timer = ({ duration, onTimeUp, curentQuestionNumber }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [curentQuestionNumber, duration]);

  useEffect(() => {
    if (timeLeft <= 0) {
      const timeout = setTimeout(() => {
        onTimeUp();
      }, 500); 
      return () => clearTimeout(timeout);
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);

  const progressPercentage = Math.max((timeLeft / duration) * 100, 0);

  return (
    <div>
      < ProgressBar  completed={progressPercentage} />
    </div>
  );
};

export default Timer;
