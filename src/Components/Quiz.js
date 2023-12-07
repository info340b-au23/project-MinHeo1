import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      question: 'Which position do you prioritize the most?',
      options: ['Quarterback', 'Running Back', 'Wide Receiver', 'Tight End'],
    },
    {
      question: 'What is your play style?',
      options: ['Aggressive', 'Conservative', 'Balanced'],
    },
    {
      question: 'Which is your favorite NFL team?',
      options: ['Seattle Seahawks', 'New England Patriots', 'Dallas Cowboys', 'Green Bay Packers'],
    },
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const result = calculateResult(answers);
      console.log('Quiz completed. Result:', result);
    }
  };

  const calculateResult = (answers) => {
    let result = 'Balanced team';
    if (answers.includes('Quarterback') && answers.includes('Wide Receiver')) {
      result = 'Pass-heavy strategy';
    } else if (answers.includes('Running Back')) {
      result = 'Run-heavy strategy';
    }
    if (answers.includes('Aggressive') && answers.includes('Seattle Seahawks')) {
      result = 'Aggressive with Seahawks fan';
    }
    return result;
  };

  return (
    <div>
      {currentQuestion < questions.length && (
        <div>
          <h3>{questions[currentQuestion].question}</h3>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswer(option)}>{option}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;
