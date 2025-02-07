import { useState } from 'react';
import { Alert, Button, TextInput, Card } from 'flowbite-react';
import MenuButtons from './MenuButtons';

const OddEvenChecker = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const checkOddEven = () => {
    // Reset states
    setError('');
    setResult('');

    // Validate input
    if (!number.trim()) {
      setError('Please enter a number!');
      return;
    }

    const convertedNum = parseInt(number);
    
    if (isNaN(convertedNum)) {
      setError('TYPE A NUMBER!!!');
      return;
    }

    // Check if odd or even
    setResult(convertedNum % 2 === 0 ? `${number} is even!` : `${number} is odd!`);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <Card>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Odd or Even Checker
        </h5>
        <div className="space-y-4">
          <div className="flex gap-2">
            <TextInput
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter a number"
              className="flex-1"
            />
            <Button onClick={checkOddEven}>
              Check
            </Button>
          </div>

          {error && (
            <Alert color="failure">
              {error}
            </Alert>
          )}

          {result && (
            <Alert color="success">
              {result}
            </Alert>
          )}
        </div>
      </Card>
      <MenuButtons/>
    </div>
  );
};

export default OddEvenChecker;