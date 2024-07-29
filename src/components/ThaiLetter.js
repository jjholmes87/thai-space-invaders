import React from 'react';

const ThaiLetter = ({ letter, position, top }) => {
  const style = {
    position: 'absolute',
    top: `${top}px`,
    left: `${position}px`,
    fontSize: '24px',
    color: 'red',
  };

  return <div style={style}>{letter}</div>;
};

export default ThaiLetter;
