import React, { useState } from 'react';
import { Button, Label, TextInput, Alert, Card } from 'flowbite-react';

const GuessIt = () => {
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [targetNumber, setTargetNumber] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const generateNumber = (level) => {
    switch (level) {
      case 'easy':
        return Math.floor(Math.random() * 11);
      case 'medium':
        return Math.floor(Math.random() * 51);
      case 'hard':
        return Math.floor(Math.random() * 101);
      default:
        return Math.floor(Math.random() * 11);
    }
  };

  const startNewGame = (level) => {
    setDifficulty(level);
    setTargetNumber(generateNumber(level));
    setMessage('');
    setUserGuess('');
    setShowSuccess(false);
  };

  const handleGuess = () => {
    if (!userGuess.match(/^\d+$/)) {
      setMessage('Numbers only bro');
      return;
    }

    const guess = parseInt(userGuess);
    
    if (guess === targetNumber) {
      let successMessage = '';
      switch (difficulty) {
        case 'easy':
          successMessage = 'You got it, not like it was that hard anyway';
          break;
        case 'medium':
          successMessage = 'You got it dude! Nice!';
          break;
        case 'hard':
          successMessage = 'No way man! You got it!';
          break;
      }
      setMessage(successMessage);
      setShowSuccess(true);
    } else if (guess > targetNumber) {
      setMessage('Way over the target dude, try going lower next time');
    } else {
      setMessage('Aim higher, dude');
    }
  };

  return (
    <Card className="max-w-sm mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Guess It Game
      </h2>
      
      <div className="flex gap-2 mb-4">
        <Button 
          color={difficulty === 'easy' ? 'success' : 'gray'}
          onClick={() => startNewGame('easy')}
        >
          Easy
        </Button>
        <Button 
          color={difficulty === 'medium' ? 'success' : 'gray'}
          onClick={() => startNewGame('medium')}
        >
          Medium
        </Button>
        <Button 
          color={difficulty === 'hard' ? 'success' : 'gray'}
          onClick={() => startNewGame('hard')}
        >
          Hard
        </Button>
      </div>

      <div className="mb-4">
        <div className="mb-2 block">
          <Label htmlFor="guess" value="Enter your guess:" />
        </div>
        <TextInput
          id="guess"
          type="number"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          placeholder="Enter a number"
        />
      </div>

      <Button onClick={handleGuess} disabled={targetNumber === null}>
        Submit Guess
      </Button>

      {message && (
        <Alert
          color={showSuccess ? 'success' : 'info'}
          className="mt-4"
        >
          {message}
        </Alert>
      )}

      {targetNumber === null && (
        <Alert color="warning" className="mt-4">
          Select a difficulty to start the game!
        </Alert>
      )}
    </Card>
  );
};

export default GuessIt;