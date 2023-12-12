import React, { useState } from "react";
import { Link } from "react-router-dom";
import Quiz from "./Quiz";

const Homepage = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <>
      <div className="row homepage">
        <Link className="col" to="/divisions">
          <div className="card col-auto">
            <div className="card-image" back>
              <img src="./img/nfl_logo.png" alt="nfl logo"></img>
            </div>
            <div className="card-content">
              <div className="card-title">Teams</div>
              <div className="card-description">Explore the 32 NFL Teams</div>
            </div>
          </div>
        </Link>

        <Link className="col" to="/fantasy">
          <div className="card col-auto">
            <div className="card-image" back>
              <img src="./img/nfl_logo.png" alt="nfl logo"></img>
            </div>
            <div className="card-content">
              <div className="card-title">Fantasy Player Leaderboards</div>
              <div className="card-description">
                See player's weekly fantasy stats
              </div>
            </div>
          </div>
        </Link>

        <Link className="col" to="/playerEval">
          <div className="card col-auto">
            <div className="card-image" back>
              <img src="./img/nfl_logo.png" alt="nfl logo"></img>
            </div>
            <div className="card-content">
              <div className="card-title">Fantasy Trade Evaluator</div>
              <div className="card-description">Evaluate a potential trade</div>
            </div>
          </div>
        </Link>

        <Link className="col" to="/players">
          <div className="card col-auto">
            <div className="card-image" back>
              <img src="./img/nfl_logo.png" alt="nfl logo"></img>
            </div>
            <div className="card-content">
              <div className="card-title">Player Search</div>
              <div className="card-description">
                Evaluate individual player stats
              </div>
            </div>
          </div>
        </Link>

        <div className="card col-auto">
          <div className="card-content">
            <div className="card-title">Fantasy Football Quiz</div>
            <div className="card-description">
              Discover your ideal player choices
            </div>
            {!showQuiz && <button onClick={handleStartQuiz}>Start Quiz</button>}
            {showQuiz && <Quiz />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
