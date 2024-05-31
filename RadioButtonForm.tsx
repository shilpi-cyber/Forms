import React, { useState } from 'react';

const RadioButtonForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Choose an Option</h2>
      <div className="flex flex-col space-y-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-blue-600"
            name="option"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          <span className="ml-2">Option 1</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-blue-600"
            name="option"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          <span className="ml-2">Option 2</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-blue-600"
            name="option"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
          />
          <span className="ml-2">Option 3</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-blue-600"
            name="option"
            value="option4"
            checked={selectedOption === 'option4'}
            onChange={handleOptionChange}
          />
          <span className="ml-2">Option 4</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-blue-600"
            name="option"
            value="option5"
            checked={selectedOption === 'option5'}
            onChange={handleOptionChange}
          />
          <span className="ml-2">Option 5</span>
        </label>
      </div>
    </div>
  );
};

export default RadioButtonForm;
