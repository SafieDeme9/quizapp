import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Settings from "./Pages/QuizSettings/Settings";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Results/Result";
import axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };
  console.log(questions);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} exact></Route>
        <Route
          path="/settings"
          element={
            <Settings
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          }
          exact
        ></Route>
        <Route
          path="/quiz"
          element={
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          }
          exact
        ></Route>
        <Route
          path="/result"
          element={<Result name={name} score={score} />}
          exact
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
