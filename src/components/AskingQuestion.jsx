import React, { useState } from 'react';
import MenuButtons from './MenuButtons';

const AskingQuestion = () => {
  const [wakeUpTime, setWakeUp] = useState('');
  const [lastFood, setLastFood] = useState('');
  const [showAnswers, setShowAnswers] = useState(false);
  
  const getWakeUpAnswer = (time) => {
    if (!time.trim()) {
      return 'Please provide words!';
    }
    return `You woke up at ${time}`;
  };

  const getFoodAnswer = (food) => {
    if(!food.trim()) {
      return 'Please provide REAL words!'
    }
    return `and you last ate ${food}.`
  }

  const handleSubmit = () => {
    setShowAnswers(true);
  };

  return (
    <div className="min-h-screen text-center">
      <h1 className="font-medium text-4xl">Asking Questions</h1>
      <div className="max-w-md mx-auto pt-8 px-4">
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              What time did you wake up today?
            </label>
            <input
              type="text"
              value={wakeUpTime}
              onChange={(e) => setWakeUp(e.target.value)}
              className="w-full border p-2 rounded text-center"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              What did you last have to eat?
            </label>
            <input
              type="text"
              value={lastFood}
              onChange={(e) => setLastFood(e.target.value)}
              className="w-full border p-2 rounded text-center"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
          >
            Show Answers
          </button>

          {showAnswers && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <p>{getWakeUpAnswer(wakeUpTime)}</p>
              <p>{getFoodAnswer(lastFood)}</p>
            </div>
          )}

          <MenuButtons/>
        </div>
      </div>
    </div>
  );
};

export default AskingQuestion;