import React, { useState } from 'react';
import MenuButtons from './MenuButtons';

const AskingQuestion = () => {
  const [wakeUpTime, setWakeUp] = useState('');
  
  const getWakeUpAnswer = (time) => {
    if (!time.trim()) {
      return 'Please provide words!';
    }
    return `You woke up at ${time}`;
  };

  const [lastFood, setLastFood] = useState('');

  const getFoodAnswer = (food) => {
    if(!food.trim()) {
      return 'Please provide REAL words!'
    }
    return `and you last ate ${food}.`
  }

  return (
    <div className="p-4">
      <input
        type="text"
        value={wakeUpTime}
        onChange={(e) => setWakeUp(e.target.value)}
        className="border p-2 rounded mr-2"
        placeholder="What time did you wake up today?"
      />
      <p className="mt-2">{getWakeUpAnswer(wakeUpTime)}</p>
      <input
        type="text"
        value={lastFood}
        onChange={(e) => setLastFood(e.target.value)}
        className="border p-2 rounded mr-2"
        placeholder="What did you last have to eat??"
      />
      <p className="mt-2">{getFoodAnswer(lastFood)}</p>

      <MenuButtons/>
    </div>
  );
};

export default AskingQuestion;