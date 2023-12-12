import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showStats, setShowStats] = useState(false);

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

  const dkMetcalfStats = {
    Rk: '103',
    Player: 'D.K. Metcalf',
    Tm: 'SEA',
    FantPos: 'WR',
    Age: '26',
    Fantasy: [
      {
        FantPt: '46',
        PPR: '67.7',
        DKPt: '70.7',
        FDPt: '56.7',
        PosRank: '33',
      },
    ],
  };

  const renderStatsTable = (player) => {
    return (
      <table>
        <tbody>
          {Object.entries(player).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>
                {typeof value === 'object' ? (
                  key !== 'Fantasy' ? (
                    <table>
                      <tbody>
                        {value[0] &&
                          Object.entries(value[0]).map(([nestedKey, nestedValue]) => (
                            <tr key={nestedKey}>
                              <td>{nestedKey}</td>
                              <td>
                                {typeof nestedValue === 'object' ? (
                                  JSON.stringify(nestedValue)
                                ) : (
                                  nestedValue
                                )}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  ) : (
                    <pre>{JSON.stringify(value[0], null, 2)}</pre>
                  )
                ) : (
                  value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      checkCriteria(answers);
    }
  };

  const checkCriteria = (answers) => {
    const hasWideReceiver = answers.includes('Wide Receiver');
    const isAggressive = answers.includes('Aggressive');
    const isSeahawksFan = answers.includes('Seattle Seahawks');

    if (hasWideReceiver && isAggressive && isSeahawksFan) {
      setShowStats(true);
    }
  };

  const showStatsOrInfo = () => {
    if (showStats) {
      return (
        <div>
          <h3>D.K. Metcalf's Stats</h3>
          {renderStatsTable(dkMetcalfStats)}
        </div>
      );
    } 
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
      {showStatsOrInfo()}
    </div>
  );
};

export default Quiz;