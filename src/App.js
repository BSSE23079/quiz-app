import QuizManager from "./components/QuizManager";
import Navbar from "./components/Navbar";
import styles from "./App.module.css";

import { quizData } from "./data";

function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <QuizManager quizData={quizData} />
    </div>
  );
}

export default App;
