// /src/components/Spaceship.js
import React from 'react';

const Spaceship = ({ position }) => {
  const style = {
    position: 'absolute',
    bottom: '10px',
    left: `${position}px`,
    width: '50px',
    height: '50px',
  };

  return (
    <div style={style}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        width="50px"
        height="50px"
      >
        <path
          style={{ fill: '#2D2D2D' }}
          d="M256,0c-17.58,0-32,14.42-32,32v101.44c-30.33,11.22-58.38,27.76-82.38,48.45L80,320h35.69
          c-10.77,18.62-16.69,39.98-16.69,64c0,70.69,57.31,128,128,128s128-57.31,128-128c0-24.02-5.92-45.38-16.69-64H432l-61.62-138.11
          c-24-20.69-52.05-37.23-82.38-48.45V32C288,14.42,273.58,0,256,0z"
        />
      </svg>
    </div>
  );
};

export default Spaceship;
