import { useState } from "react";
import MenuButtons from "./MenuButtons";

const ReverseItAlpha = () => {
  const [inputText, setInputText] = useState("");
  const [reversedText, setReversedText] = useState("");

  const reverseString = (str) => {
    return str.split("").reverse().join("");
  };

  const handleReverse = () => {
    setReversedText(reverseString(inputText));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex justify-center">
    <div className="w-full max-w-[95%] md:max-w-[80%] lg:max-w-2xl mx-auto bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center">Text Reverser</h2>

      <div className="mb-6">
        <label htmlFor="input" className="block text-sm md:text-base lg:text-lg mb-2 font-medium">
          Enter Text:
        </label>
        <input
          id="input"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full p-2 md:p-3 lg:p-4 border rounded text-sm md:text-base lg:text-lg"
          placeholder="Type something to reverse..."
        />
      </div>

      <button
        onClick={handleReverse}
        className="w-full bg-blue-500 text-white p-2 md:p-3 lg:p-4 rounded text-sm md:text-base lg:text-lg font-medium hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Reverse Text
      </button>

      {reversedText && (
        <div className="mt-6 p-4 md:p-5 lg:p-6 bg-gray-100 rounded">
          <p className="font-bold text-sm md:text-base lg:text-lg mb-2">Reversed Text:</p>
          <p className="text-sm md:text-base lg:text-lg break-words">{reversedText}</p>
        </div>
      )}
    </div>
    <MenuButtons/>
    </div>
  );
};

export default ReverseItAlpha;