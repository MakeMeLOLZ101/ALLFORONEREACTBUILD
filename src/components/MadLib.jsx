import React, { useState } from 'react';
import MenuButtons from './MenuButtons';

const MadlibForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    noun: '',
    verb: '',
    adjective: '',
    occupation: ''
  });
  
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateMadlib = (e) => {
    e.preventDefault();
    const { name, noun, verb, adjective, occupation } = formData;
    const madlib = `${name} decided not to ${verb} that morning because they knew that ${name} the ${occupation} would be coming in today. With not much time to ${verb} as the ${noun} was ${adjective}, they could at least stop the ${adjective} ${adjective}, otherwise the house would be ${verb}.`;
    setResult(madlib);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Create Your Madlib</h2>
      
      <form onSubmit={generateMadlib} className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Noun
          </label>
          <input
            type="text"
            name="noun"
            value={formData.noun}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Verb
          </label>
          <input
            type="text"
            name="verb"
            value={formData.verb}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Adjective
          </label>
          <input
            type="text"
            name="adjective"
            value={formData.adjective}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Occupation
          </label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Generate Madlib
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Your Madlib Story:</h3>
          <p className="text-gray-700">{result}</p>
        </div>
      )}
      <MenuButtons/>
    </div>
  );
};

export default MadlibForm;