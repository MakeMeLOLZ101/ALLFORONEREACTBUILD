import { useState } from 'react';

const ReverseItAlpha = () => {
  const [inputText, setInputText] = useState('');
  const [reversedText, setReversedText] = useState('');

  const reverseString = (str) => {
    return str.split('').reverse().join('');
  };

  const handleReverse = () => {
    setReversedText(reverseString(inputText));
  };

  return (
    <div className="p-6 max-w-lg mx-auto border rounded-lg shadow-sm">
    <h2 className="text-xl font-bold mb-4">Text Reverser</h2>
    
    <div className="mb-4">
      <label htmlFor="input" className="block mb-2">
        Enter Text:
      </label>
      <input
        id="input"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Type something to reverse..."
      />
    </div>
    
    <button
      onClick={handleReverse}
      className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
    >
      Reverse Text
    </button>

    {reversedText && (
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <p className="font-bold">Reversed Text:</p>
        <p className="mt-2">{reversedText}</p>
      </div>
    )}
  </div>
);
};

export default ReverseItAlpha;