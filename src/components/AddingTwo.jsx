import React, { useState } from 'react';

const AddingTwo = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const sum = number(num1) + number(num2);
    setResult(`The sum of ${num1} and ${num2} is ${sum}.`);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h1 className="text-xl font-bold text-gray-900 mb-4">
        Adding Two Numbers!
      </h1>
      <div className="mb-4">
        <label 
          htmlFor="num1" 
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          First Number
        </label>
        <input
          id="num1"
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      
      <div className="mb-4">
        <label 
          htmlFor="num2" 
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Second Number
        </label>
        <input
          id="num2"
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      <button 
        onClick={handleCalculate}
        disabled={!num1 || !num2}
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Calculate Sum
      </button>

      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg text-center text-gray-900">
          {result}
        </div>
      )}
    </div>
  );
};

export default AddingTwo;