import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss';

ColorBox.propTypes = {
  
};

function getRandomColor() {
  const COLOR_LIST = ['deeppink', 'red', 'blue', 'black', 'yellow'];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  // Chay nhieu lan
  // const initColor = localStorage.getItem('box_color') || 'deeppink';
  // console.log(initColor);

  const [color, setColor] = useState(() => {
    // Chi chay 1 lan
    const initColor = localStorage.getItem('box_color') || 'deeppink';
    console.log(initColor);
    return initColor;
  });

  function handleBoxClick() {
    // get random color -> set color
    const newColor= getRandomColor();
    setColor(newColor);

    localStorage.setItem('box_color', newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      COLOR BOX
    </div>
  );
}

export default ColorBox;