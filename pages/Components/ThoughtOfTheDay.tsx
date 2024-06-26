"use client";
// components/ThoughtOfTheDay.js

import { useState } from "react";
import { MdRefresh } from "react-icons/md";

const thoughts = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "Embrace uncertainty as a catalyst for growth. - Brené Brown",
  "Seek simplicity in a complex world. - Eckhart Tolle",
  "Every setback is an opportunity to learn resilience. - Robin Sharma",
  "Cultivate gratitude for the small joys in life. - Oprah Winfrey",
  "Challenge assumptions; they often limit potential. - Malcolm Gladwell",
  "Balance ambition with contentment. - Deepak Chopra",
  "Practice empathy daily; it's the cornerstone of connection. - Dalai Lama",
  "Remember, progress is often nonlinear - Simon Sinek",
  "Prioritize self-care; it's not selfish, it's necessary. - Arianna Huffington",
  "Celebrate the journey, not just the destination. - Tony Robbins",
];

const getRandomThought = () => {
  const randomIndex = Math.floor(Math.random() * thoughts.length);
  return thoughts[randomIndex];
};

const ThoughtOfTheDay = () => {
  const [thought, setThought] = useState(getRandomThought());

  const generateNewThought = () => {
    setThought(getRandomThought());
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-2xl mt-5 flex flex-col items-center mx-3">
      <p className="text-lg font-bold mb-2 font-pacifico">
        Thought of the Day:
      </p>
      <p className="text-gray-800 text-center font-serif">{thought}</p>

      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none self-end"
        onClick={generateNewThought}
      >
        <MdRefresh />
      </button>
    </div>
  );
};

export default ThoughtOfTheDay;
