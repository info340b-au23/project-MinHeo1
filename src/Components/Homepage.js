import React, { useState } from "react";
import Quiz from "./Quiz"; // Import the Quiz component

const Homepage = () => {
    const [showQuiz, setShowQuiz] = useState(false);
    
    const handleStartQuiz = () => {
        setShowQuiz(true);
    }; 

    return (
        <>
        <div className="row">
            <div className="card col-auto">
                <div className="card-image" back>
                    <img src="./img/nfl_logo.png" alt="nfl logo"></img>
                </div>
                <div className="card-content">
                    <div className="card-title">Teams</div>
                    <div className="card-description">Explore the 32 NFL Teams</div>
                </div>
            </div>

            <div className="card col-auto">
                <div className="card-image" back>
                    <img src="./img/nfl_logo.png" alt="nfl logo"></img>
                </div>
                <div className="card-content">
                    <div className="card-title">Teams</div>
                    <div className="card-description">Will soon</div>
                </div>
             </div>

            <div className="card col-auto">
                <div className="card-image" back>
                    <img src="./img/nfl_logo.png" alt="nfl logo"></img>
                </div>
                <div className="card-content">
                    <div className="card-title">another</div>
                    <div className="card-description">Be</div>
                </div>
            </div>
            <div className="card col-auto">
                <div className="card-image" back>
                    <img src="./img/nfl_logo.png" alt="nfl logo"></img>
                </div>
                <div className="card-content">
                    <div className="card-title">another</div>
                    <div className="card-description">Clickable</div>
                </div>
            </div>
            <div className="card col-auto">
                <div className="card-content">
                    <div className="card-title">Fantasy Football Quiz</div>
                    <div className="card-description">
                      Discover your ideal player choices
                    </div>
                    {!showQuiz && (
                        <button onClick={handleStartQuiz}>Start Quiz</button>
                    )}
                    {showQuiz && <Quiz />}
                </div>
            </div>  
        </div>

        </>
    );
};

export default Homepage;