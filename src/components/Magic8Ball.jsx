import React, { useState } from 'react';
import MenuButtons from './MenuButtons';

const MagicEightBall = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];

  const getAnswer = () => {
    if (!question.trim()) {
      alert('Please ask a question first!');
      return;
    }

    setIsShaking(true);
    setAnswer('');

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * responses.length);
      setAnswer(responses[randomIndex]);
      setIsShaking(false);
    }, 1000);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Magic Eight Ball
      </h2>
      
      <div className="mb-6">
        <label 
          htmlFor="question" 
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Ask your question:
        </label>
        <input
          type="text"
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="What is your question?"
        />
      </div>

      <button
        onClick={getAnswer}
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-6"
      >
        Shake the Magic Eight Ball
      </button>

      {answer && (
        <div className={`relative p-4 mb-4 text-sm rounded-lg bg-black ${
          isShaking ? 'animate-bounce' : ''
        }`}>
          <div className="w-24 mx-auto bg-black rounded-full flex items-center justify-center">
          </div>
          <p className="text-white text-center font-medium">
            {answer}
          </p>
        </div>
      )}
      <MenuButtons/>
    </div>
  );
};

export default MagicEightBall;