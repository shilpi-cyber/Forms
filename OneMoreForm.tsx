import React, { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import 'tailwindcss/tailwind.css';

interface FormData {
  email: string;
  pass: string;
  cpass: string;
  twitter: string;
  facebook: string;
  gplus: string;
  fname: string;
  lname: string;
  phone: string;
  address: string;
}

const OneMoreForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    pass: '',
    cpass: '',
    twitter: '',
    facebook: '',
    gplus: '',
    fname: '',
    lname: '',
    phone: '',
    address: ''
  });

  const steps = ["Account Setup", "Social Profiles", "Personal Details"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleNextStep = (): void => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = (): void => {
    setStep((prevStep) => prevStep - 1);
  };

  const progressPercentage = ((step - 1) / (steps.length - 1)) * 100;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
              Step {step} of {steps.length}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-blue-600">
              {Math.round(progressPercentage)}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
          <div
            style={{ width: `${progressPercentage}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
          ></div>
        </div>
      </div>

      <ul id="progressbar" className="flex justify-between mb-6">
        {steps.map((item, index) => (
          <li key={index} className={`flex-1 text-center ${step > index ? 'text-green-500' : 'text-gray-500'}`}>
            {step > index ? <TiTick /> : index + 1}
            <div className="mt-1">{item}</div>
          </li>
        ))}
      </ul>

      <form className="space-y-6">
        {step === 1 && (
          <fieldset>
            <h2 className="text-2xl font-semibold mb-4">Create your account</h2>
            <h3 className="text-sm text-gray-500 mb-4">This is step 1</h3>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="pass"
              value={formData.pass}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
            />
            <input
              type="password"
              name="cpass"
              value={formData.cpass}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
            />
            <button
              type="button"
              onClick={handleNextStep}
              className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Next
            </button>
          </fieldset>
        )}
        {step === 2 && (
          <fieldset>
            <h2 className="text-2xl font-semibold mb-4">Social Profiles</h2>
            <h3 className="text-sm text-gray-500 mb-4">Your presence on the social network</h3>
            <input
              type="text"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              placeholder="Twitter"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
              placeholder="Facebook"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
            />
            <input
              type="text"
              name="gplus"
              value={formData.gplus}
              onChange={handleChange}
              placeholder="Google Plus"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
            />
            <div className="flex justify-between mt-6">
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
          </fieldset>
        )}
        {step === 3 && (
          <fieldset>
            <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
            <h3 className="text-sm text-gray-500 mb-4">We will never sell it</h3>
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
            />
            <div className="flex justify-between mt-6">
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
          </fieldset>
        )}
      </form>
    </div>
  );
};

export default OneMoreForm;
