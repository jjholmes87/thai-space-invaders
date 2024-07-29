import React from 'react';
import './ThaiLetter.css'; // Import the CSS file for styling

const ThaiLetter = ({ letter, position, top, hit }) => {
  return (
    <div className={`thai-letter ${hit ? 'explosion' : ''}`} style={{ left: position, top: top }}>
      {letter}
    </div>
  );
};

export default ThaiLetter;
