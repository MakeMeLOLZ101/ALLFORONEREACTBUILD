import React, { useState } from 'react';
import { Button, Label, Select } from 'flowbite-react';
import MenuButtons from './MenuButtons';

const RestaurantPicker = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [result, setResult] = useState('');

  const restaurants = {
    italian: [
      "Little Caesars",
      "Mario's corner",
      "Papa john's",
      "Domino's",
      "Luigi's",
      "Galleto Ristorante",
      "Padella Italliana",
      "Olive Garden",
      "Wario's Hamburger & pizza",
      "WaLuigi's"
    ],
    mexican: [
      "El Jardin",
      "Taqueria GOKU",
      "Tortas El Chavo",
      "LOS CAZADORES TAQUERIA",
      "chipotle",
      "Taco Bell",
      "Las Casuelas",
      "Esmeralda's",
      "Taqueria La Costa",
      "Vegita's Tortas & Burritos"
    ],
    dutch: [
      "Amsterdam, hamster-ham",
      "NederGANS",
      "De kas",
      "Moeders",
      "The Pantry",
      "Vis en Kip",
      "Grillby's",
      "Maccie",
      "Dutch Burger King",
      "Kentucky Gebakken Kip"
    ]
  };

  const getRandomRestaurant = () => {
    if (!selectedCuisine) {
      setResult('Please select a cuisine type');
      return;
    }

    if (/^\d+$/.test(selectedCuisine)) {
      setResult('Please use words not numbers');
      return;
    }

    const cuisineList = restaurants[selectedCuisine.toLowerCase()];
    if (!cuisineList) {
      setResult('Please select a valid cuisine type');
      return;
    }

    const randomIndex = Math.floor(Math.random() * cuisineList.length);
    setResult(cuisineList[randomIndex]);
  };

  const handleSelectChange = (event) => {
    setSelectedCuisine(event.target.value);
    setResult('');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Restaurant Picker</h2>
      
      <div className="mb-4">
        <Label htmlFor="cuisine" value="Select Cuisine" className="mb-2 block" />
        <Select 
          id="cuisine"
          value={selectedCuisine}
          onChange={handleSelectChange}
          required
        >
          <option value="">Choose a cuisine</option>
          <option value="italian">Italian</option>
          <option value="mexican">Mexican</option>
          <option value="dutch">Dutch</option>
        </Select>
      </div>

      <Button 
        onClick={getRandomRestaurant}
        className="w-full mb-4"
      >
        Find Restaurant
      </Button>

      {result && (
        <div className={`p-4 rounded-lg ${
          result.includes('Please') ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
        }`}>
          <p className="text-center font-medium">{result}</p>
        </div>
      )}
      <MenuButtons/>
    </div>
  );
};

export default RestaurantPicker;