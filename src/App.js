import QuizManager from "./components/quiz/QuizManager";

import styles from "./App.module.css";
import Header from "./components/layout/Header/Header";
import { quizData } from "./data";


function App() {
  return (
    <div className={styles.appContainer}>
      <Header/>
      <QuizManager quizData={quizData} />
    </div>
  );
}

export default App;
