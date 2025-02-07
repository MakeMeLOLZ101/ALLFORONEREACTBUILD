import React, { useState } from "react";

const Magic8Ball = () => {
  const [randomResponse, setRandomResponse] = useState("");
  const [result, setResult] = useState("");

  const responses = {
    ballResponses: [
      "That's exactly right",
      "You may want to give up",
      "Not sure how that'll turn out",
      "Just go for it",
      "Ask the person to your left",
      "Ask the person to your right",
      "Who can say, really?",
      "Just stop",
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
      "Very doubtful",
    ],
  };

  const getRandomResponse = () => {
    
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-900">
        Magic 8 Ball
      </h1>

    </div>
  );
};

export default Magic8Ball;
