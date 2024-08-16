// DailyFunGame.jsx
import React, { useState } from 'react';

import './DailyFunGame.css';

const DailyFunGame = () => {
  const terms = [
    ['O', 'P', 'E', 'R', 'A', 'T', 'I', 'N', 'G'],
    ['C', 'O', 'M', 'P', 'U', 'T', 'E', 'R'],
    ['J', 'A', 'V', 'A', 'S', 'C', 'R', 'I', 'P', 'T'],
    ['P', 'R', 'O', 'G', 'R', 'A', 'M', 'M', 'I', 'N', 'G'],
    ['A', 'L', 'G', 'O', 'R', 'I', 'T', 'H', 'M'],
  ];

  const scrambledTerms = [
    ['O', '_', 'R', '_', 'T', '_', 'N', '_'],
    ['C', '_', 'M', '_', 'U', '_', 'E', 'R'],
    ['J', '_', 'V', '_', 'S', '_', 'R', '_', 'P', '_', 'T'],
    ['P', '_', 'O', '_', 'R', '_', 'A', '_', 'M', '_', 'N', '_', 'G'],
    ['A', '_', 'G', '_', 'R', '_', 'T', '_', 'H', '_', 'M'],
  ];

  const hints = [
    "Hint: It is the program that, after being initially loaded into the computer...",
    "Hint: An electronic device that can process data and perform tasks...",
    "Hint: A popular programming language mainly used for web development...",
    "Hint: The process of designing and building an executable computer program...",
    "Hint: A step-by-step procedure for solving a problem or accomplishing a task...",
  ];

  const [currentTermIndex, setCurrentTermIndex] = useState(0);
  const [userGuess, setUserGuess] = useState(Array(terms[currentTermIndex].length).fill(''));
  const [result, setResult] = useState('');

  const handleChange = (index, value) => {
    const updatedGuess = [...userGuess];
    updatedGuess[index] = value.toUpperCase();
    setUserGuess(updatedGuess);
  };

  const handleSubmit = () => {
    if (userGuess.join('') === terms[currentTermIndex].join('')) {
      setResult('Correct!');
      // Move to the next term after a correct guess
      const nextIndex = (currentTermIndex + 1) % terms.length;
      setCurrentTermIndex(nextIndex);
      setUserGuess(Array(terms[nextIndex].length).fill(''));
    } else {
      setResult('Try again!');
    }
  };

  return (
    <div className="game-container">
      <h2>Daily Fun</h2>
      <h3>Guess the Term</h3>
      {result && <p className="result-message">{result}</p>}
      <div className="scrambled-word">
        {scrambledTerms[currentTermIndex].map((letter, index) => (
          <input
            key={index}
            maxLength="1"
            value={letter !== '_' ? letter : userGuess[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            readOnly={letter !== '_'}
          />
        ))}
      </div>
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      <div className="hint">
        <p>{hints[currentTermIndex]}</p>
      </div>
    </div>
  );
};

export default DailyFunGame;
