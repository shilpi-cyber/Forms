import React, { useState } from "react";

const SurveyForm: React.FC = () => {
  const [currentPanel, setCurrentPanel] = useState<number>(1);

  const nextPanel = () => {
    setCurrentPanel((prevPanel) => prevPanel + 1);
  };

  const prevPanel = () => {
    setCurrentPanel((prevPanel) => prevPanel - 1);
  };

  const submitForm = () => {
    // Handle form submission
  };

  return (
    <div className="container flex mx-auto px-4">
      <header className="header text-center">
        <h1 id="title" className="header__title text-4xl font-bold my-8">
          Product Survey Form
        </h1>
        <p id="description" className="header__description text-lg">
          We would love to hear your thoughts on how we can improve your
          experience.
        </p>
        <img
          src="https://res.cloudinary.com/alexandracaulea/image/upload/v1585333913/illustration_x46ict.svg"
          alt=""
          aria-hidden="true"
          className="illustration mx-auto mt-8 h-[50%]"
        />
      </header>
      <main className="main">
        <form
          action="#"
          method="GET"
          id="survey-form"
          className="survey"
          noValidate
        >
          {/* Survey panels */}
          <div className={`panel ${currentPanel !== 1 ? "hidden" : ""}`}>
            <h2 className="panel__title text-2xl font-bold mb-4">Panel 1</h2>
            <div className={`panel ${currentPanel !== 1 ? "hidden" : ""}`}>
              <h2 className="panel__title text-2xl font-bold mb-4">Panel 1</h2>
              <div className="panel__content">
                <p className="text-lg mb-4">
                  Please provide your feedback on the following questions:
                </p>
                <div className="form-group mb-4">
                  <label htmlFor="name" className="form-label block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="email" className="form-label block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="age" className="form-label block mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    className="form-input w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                    placeholder="Enter your age"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`panel ${currentPanel !== 2 ? "hidden" : ""}`}>
            <h2 className="panel__title text-2xl font-bold mb-4">Panel 2</h2>
            <div className={`panel ${currentPanel !== 2 ? "hidden" : ""}`}>
              <h2 className="panel__title text-2xl font-bold mb-4">Panel 2</h2>
              <div className="panel__content">
                <p className="text-lg mb-4">
                  Please rate your satisfaction with the following features:
                </p>
                <div className="form-group mb-4">
                  <label className="block mb-2">Ease of Use</label>
                  <div>
                    <input
                      type="radio"
                      id="ease-of-use-poor"
                      name="ease-of-use"
                      value="poor"
                      className="mr-2"
                      required
                    />
                    <label htmlFor="ease-of-use-poor" className="mr-4">
                      Poor
                    </label>
                    <input
                      type="radio"
                      id="ease-of-use-fair"
                      name="ease-of-use"
                      value="fair"
                      className="mr-2"
                    />
                    <label htmlFor="ease-of-use-fair" className="mr-4">
                      Fair
                    </label>
                    <input
                      type="radio"
                      id="ease-of-use-good"
                      name="ease-of-use"
                      value="good"
                      className="mr-2"
                    />
                    <label htmlFor="ease-of-use-good" className="mr-4">
                      Good
                    </label>
                    <input
                      type="radio"
                      id="ease-of-use-excellent"
                      name="ease-of-use"
                      value="excellent"
                      className="mr-2"
                    />
                    <label htmlFor="ease-of-use-excellent">Excellent</label>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label className="block mb-2">Customer Support</label>
                  <div>
                    <input
                      type="radio"
                      id="customer-support-poor"
                      name="customer-support"
                      value="poor"
                      className="mr-2"
                      required
                    />
                    <label htmlFor="customer-support-poor" className="mr-4">
                      Poor
                    </label>
                    <input
                      type="radio"
                      id="customer-support-fair"
                      name="customer-support"
                      value="fair"
                      className="mr-2"
                    />
                    <label htmlFor="customer-support-fair" className="mr-4">
                      Fair
                    </label>
                    <input
                      type="radio"
                      id="customer-support-good"
                      name="customer-support"
                      value="good"
                      className="mr-2"
                    />
                    <label htmlFor="customer-support-good" className="mr-4">
                      Good
                    </label>
                    <input
                      type="radio"
                      id="customer-support-excellent"
                      name="customer-support"
                      value="excellent"
                      className="mr-2"
                    />
                    <label htmlFor="customer-support-excellent">
                      Excellent
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add more panels as needed */}
        </form>
      </main>
      <div className="form-buttons flex justify-center mt-8">
        <button
          className="button mr-4"
          type="button"
          name="prev"
          disabled={currentPanel === 1}
          onClick={prevPanel}
        >
          Prev
        </button>
        <button
          className="button mr-4"
          type="button"
          name="next"
          onClick={nextPanel}
        >
          Next
        </button>
        <button
          className="button"
          type="submit"
          id="submit"
          name="submit"
          disabled={currentPanel !== 5}
          onClick={submitForm}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SurveyForm;
