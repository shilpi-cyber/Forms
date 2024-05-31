import React, { useState } from 'react';
import { TiTick } from 'react-icons/ti';

interface FormData {
  name: string;
  email: string;
  password: string;
  address: string;
}

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    address: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // You can submit the form data here
    console.log(formData);
  };

  const handleNextStep = (): void => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = (): void => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <div className="relative h-4 mb-6">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-full" />
        <div className="absolute top-0 left-0 h-full bg-green-500 rounded-full" style={{ width: `${(step / 3) * 100}%` }}>
          {step === 3 && <TiTick className="absolute top-0 left-0 w-full h-full text-white" />}
        </div>
      </div>
      <div className="flex justify-between mb-6">
        <span>Step {step} of 3</span>
        <div className="flex items-center">
          {step === 3 && <TiTick size={20} className="text-green-500" />}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <h2>Step 1: Personal Information</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 mt-2 border rounded-md"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 mt-2 border rounded-md"
            />
            <button
              type="button"
              onClick={handleNextStep}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2>Step 2: Contact Information</h2>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2 mt-2 border rounded-md"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full p-2 mt-2 border rounded-md"
            />
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={handlePrevStep}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNextStep}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2>Step 3: Create Password</h2>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2 mt-2 border rounded-md"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full p-2 mt-2 border rounded-md"
            />
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={handlePrevStep}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
              >
                Previous
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
