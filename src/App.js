import Card from "./components/Card";
import Navbar from "./components/Navbar";
function App() {
  const quizData = [
    {
      title: "Where is Lahore located?",
      options: [
        { id: 1, name: "KPK" , isCorrect: true},
        { id: 2, name: "Sindh" },
        { id: 3, name: "Balochistan" },
        { id: 4, name: "Punjab" },
      ],
      correctedOptionId: 4
    },
    {
      title: "Where is capital of Pakistan",
      options: [
        { id: 1, name: "Lahore" },
        { id: 2, name: "Quetta" },
        { id: 3, name: "Islamabad" },
        { id: 4, name: "Karachi" },
      ],
      correctedOptionId: 3
    },
        {
      title: "Where is national animal of Pakistan",
      options: [
        { id: 1, name: "Lion" },
        { id: 2, name: "Rabbit" },
        { id: 3, name: "Markhor" },
        { id: 4, name: "Cat" },
      ],
      correctedOptionId: 3
    }
  ];

  return (
    <div>
      <Navbar/>
      <Card question={quizData[0]}  />
    </div>
  );
}

export default App;
