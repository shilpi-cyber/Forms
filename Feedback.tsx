import React, { useState, useRef } from "react";

const Feedback = () => {
  const [rating, setRating] = useState<number>(80);
  const slidingListRef = useRef<HTMLUListElement>(null);

  const updateSlider = (value: number) => {
    setRating(value);
    const listIndex = Math.floor(value / 10);
    const listElement = slidingListRef.current;
    if (listElement) {
      listElement.style.transform = `translateY(${-listIndex * 1.5}em)`;
    }
  };

  const surveyOptions = [
    "Absolutely Terrible!",
    "Disappointing",
    "Quite Bad hey",
    "Not impressed",
    "Nothing to be proud of",
    "Could have been better",
    "Satisfactory",
    "Ok, I guess",
    "Was Great",
    "Super Impressed!",
  ];

  return (
    <div className="form">
      <div className="face">
        <svg viewBox="-10 -10 620 620">
          <g stroke="#4d4d4d" strokeWidth="20" id="face">
            <circle cx="300" cy="300" r="300" />
            <path
              d="M100,350 Q300,450 500,350 Q300,550 100,350 z"
              fill="white"
              stroke="#4d4d4d"
              strokeWidth="20"
              strokeLinejoin="round"
              id="mouth"
            />
            <g fill="#4d4d4d">
              <path
                d="M285 200 a 30 30 0 1 0 -1 0 z"
                fill="#4d4d4d"
                stroke="#4d4d4d"
                strokeWidth="20"
                strokeLinejoin="round"
                className="eye--left"
              />
              <path
                d="M515 200 a 30 30 0 1 0 -1 0 z"
                fill="#4d4d4d"
                stroke="#4d4d4d"
                strokeWidth="20"
                strokeLinejoin="round"
                className="eye--right"
              />
            </g>
          </g>
        </svg>
      </div>
      <h3 className="heading">How do you feel about our customer service?</h3>
      <div className="sliding-list">
        <ul ref={slidingListRef}>
          {surveyOptions.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
      <input
        type="range"
        min={0}
        max={99}
        value={rating}
        onChange={(e) => updateSlider(parseInt(e.target.value))}
        className="slider"
      />
    </div>
  );
};

export default Feedback;
