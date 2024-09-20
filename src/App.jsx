import React, { useState } from 'react';

function App() {
  const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500'];
  const [colorIndex, setColorIndex] = useState(0);

  // Function to change background color on button click
  const changeBackgroundColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div className={`h-screen w-screen flex items-center justify-center ${colors[colorIndex]}`}>
      <button
        onClick={changeBackgroundColor}
        className="px-6 py-3 bg-white text-black font-bold rounded-md shadow-md hover:bg-gray-300 transition duration-300"
      >
        Change Background
      </button>
    </div>
  );
}

export default App;
