import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../public/images/quizbanner.png";
import categories from "../../../public/images/categories.png";
import difficulty from "../../../public/images/difficulty.png";
import quizap from "../../../public/images/quizap.png";
import results from "../../../public/images/results.png";
import myself from "../../../public/images/myself.png";
import Section from "../../components/Section/Section";
import "./LandingPage.css";
function LandingPage() {
  return (
    <div className="landingpage">
      <section className="intro">
        <div>
          <h1>
            <p>QuizApp Intro</p>
          </h1>
          <p className="textintro">
            Welcome to QuizApp, where learning meets excitement! Explore 18
            dynamic categories to boost your general knowledge in a fun way.
            From science to pop culture, our quizzes offer a lighthearted
            approach to education. Challenge yourself, enjoy the journey, and
            elevate your understanding with QuizApp's engaging and diverse quiz
            collection! 🚀🧠
          </p>
          <div className="btn-items">
            <Link to="/settings">
              {" "}
              <button className="button">Play !</button>
            </Link>
            <Link to="#features">
              {" "}
              <button className="button">Learn more</button>
            </Link>
          </div>
        </div>
      </section>
      <h1>
        <p>Features</p>
      </h1>
      <div id="features">
        <div>
          <Section
            name="Categories"
            label="Explore QuizApp's 18 diverse categories! From General Knowledge
              to Entertainment: Japanese Anime & Manga, embark on a
              knowledge-packed journey. Immerse yourself in topics like science,
              sports, history, and more. Challenge your mind, have fun, and
              elevate your understanding across a spectrum of fascinating
              subjects! 🌟🧠"
            img={categories}
          />
        </div>
        <div>
          <Section
            name="Levels"
            label="Select your challenge level on QuizApp! Tailor your quiz experience by choosing difficulty levels—easy, medium, or hard. Whether you're a casual learner or a trivia expert, QuizApp adapts to your pace, making every quiz an enjoyable and personalized adventure. Start quizzing and elevate your knowledge at your own comfort!"
            img={difficulty}
          />
        </div>
        <div>
          <Section
            name="Play"
            label="Jump into the QuizApp playtime fun! Engage in thrilling quizzes. Answer the question and press Next to go to the next question, or Quit, is to quit the quiz. Keep playing, answer questions, and see how many you get right! The app even tracks your score"
            img={quizap}
          />
        </div>
        <div>
          <Section
            name="Results"
            label="Finish the quiz and see how many you got right. You can choose to play again and continue the adventure"
            img={results}
          />
        </div>
      </div>
      <div id="team">
        <h1>
          <p>Team</p>
        </h1>
        <div>
          <p>
            Greetings, QuizApp enthusiasts! 👩‍💻 As a budding software engineer at
            ALX Training, I've crafted QuizApp with love and a thirst for
            knowledge using React.js. Dive into our quizzes, meticulously
            designed for a brainy adventure. Follow my coding journey and stay
            tuned for exciting updates on{" "}
            <Link to="https://x.com/@Sdeme9">Twitter</Link> and connect on{" "}
            <Link to="https://www.linkedin.com/in/sdeme9/">LinkedIn</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
