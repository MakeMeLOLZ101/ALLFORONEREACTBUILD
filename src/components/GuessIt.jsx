import React, { useState } from 'react';
import { Button, Label, TextInput, Alert, Card } from 'flowbite-react';
import MenuButtons from './MenuButtons';

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
      setMessage('Please enter a valid number');
      return;
    }

    const guess = parseInt(userGuess);
    
    if (guess === targetNumber) {
      let successMessage = '';
      switch (difficulty) {
        case 'easy':
          successMessage = 'Congratulations! You found the number!';
          break;
        case 'medium':
          successMessage = 'Great job! You got it right!';
          break;
        case 'hard':
          successMessage = 'Amazing! You found the number on hard mode!';
          break;
      }
      setMessage(successMessage);
      setShowSuccess(true);
    } else if (guess > targetNumber) {
      setMessage('Too high! Try a lower number');
    } else {
      setMessage('Too low! Try a higher number');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-sm mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Number Guessing Game
        </h2>
        
        <div className="flex gap-2 mb-4">
          <Button 
            gradientDuoTone={difficulty === 'easy' ? 'greenToBlue' : 'purpleToBlue'}
            onClick={() => startNewGame('easy')}
          >
            Easy
          </Button>
          <Button 
            gradientDuoTone={difficulty === 'medium' ? 'greenToBlue' : 'purpleToBlue'}
            onClick={() => startNewGame('medium')}
          >
            Medium
          </Button>
          <Button 
            gradientDuoTone={difficulty === 'hard' ? 'greenToBlue' : 'purpleToBlue'}
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

        <Button onClick={handleGuess} disabled={targetNumber === null} gradientDuoTone="cyanToBlue">
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
      <MenuButtons/>
    </div>
  );
};

export default GuessIt;