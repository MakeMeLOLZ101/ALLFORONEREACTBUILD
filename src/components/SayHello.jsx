import React, { useState } from 'react';

const SayHello = () => {
  const [name, setName] = useState('');
  
  const getGreeting = (inputName) => {
    if (!inputName.trim()) {
      return 'Please provide a name!';
    }
    return `Hello, ${inputName}!`;
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded mr-2"
        placeholder="Enter your name"
      />
      <p className="mt-2">{() =>getGreeting(name)}</p>
    </div>
  );
};

export default SayHello;