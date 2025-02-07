import React, { useState } from 'react';
import MenuButtons from './MenuButtons';

const ReverseItNumbers = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [result, setResult] = useState('');
  const [showError, setShowError] = useState(false);

  const reverseNumber = (number) => {
    
    const parsedNum = parseInt(number);
    
    if (isNaN(parsedNum)) {
      setShowError(true);
      setResult('');
      return;
    }

    setShowError(false);
    let numStr = Math.abs(parsedNum).toString();
    let reversed = '';

    for (let i = numStr.length - 1; i >= 0; i--) {
      reversed += numStr[i];
    }

    if (parsedNum < 0) {
      reversed = `-${reversed}`;
    }

    setResult(reversed);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    reverseNumber(inputNumber);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Number Reverser</h1>
      
      <div className="space-y-4">
        <div>
          <p className="mb-2">Enter a number:</p>
          <input
            type="text"
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
            placeholder="Enter a number to reverse..."
            className="w-full p-2 border rounded-lg"
          />
        </div>
        
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Reverse Number
        </button>

        {showError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>PLEASE TYPE IN A NUMBER, BUDDY!!!</p>
          </div>
        )}

        {result && !showError && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            <p>Reversed number: {result}</p>
          </div>
        )}
      </div>
      <MenuButtons/>
    </div>
    
  );
};

export default ReverseItNumbers;